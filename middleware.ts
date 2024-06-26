import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './i18n.config';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  
  const locales: string[] = i18n.languages.map((lang) => lang.id);
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.base || 'id');
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.languages.every(
    (locale) =>
      !pathname.startsWith(`/${locale.id}/`) && pathname !== `/${locale.id}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // Если локаль совпадает с основной локалью, перенаправляем на URL без локали
    if (locale === i18n.base) {
      return NextResponse.redirect(
        new URL(
          `${pathname === '/' ? '/ru' : pathname}`,
          request.url,
        ),
      );
    } else {
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
          request.url,
        ),
      );
    }
  }
}


export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|admin|_next/image|favicon.ico).*)'],
};