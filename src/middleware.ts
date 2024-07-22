import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = i18n.languages.map((lang) => lang.id);
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.base || "id");
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Проверка на отсутствие локали в пути
  const pathnameIsMissingLocale = i18n.languages.every(
    (locale) =>
      !pathname.startsWith(`/${locale.id}/`) && pathname !== `/${locale.id}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    if (locale) {
      const redirectUrl = new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      );

      // Логирование редиректов для отладки
      console.log(`Redirecting to: ${redirectUrl.toString()}`);

      return NextResponse.redirect(redirectUrl);
    } else {
      // Логирование ситуации, когда локаль не найдена
      console.log("Locale not found, using default locale");
    }
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|admin|studio|robots|sitemap|_next/image|favicon.ico).*)",
  ],
};
