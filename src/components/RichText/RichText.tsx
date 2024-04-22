import { urlFor } from "@/libs/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RichText = {
  type: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center">
          <Image
            src={urlFor(value).url()}
            alt="Post image"
            width={700}
            height={700}
            className="object-contain py-6"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-5 py-5 space-y-2">
        {children}
      </ul>
    ),
  },
  number: ({ children }: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    normal: ({ children }: any) => <p className="mb-5">{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-[50px] mb-2 font-bold text-[#163e5c]">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-center md:text-left text-3xl md:text-[40px] mb-2 font-bold text-[#163e5c]">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-[30px] mb-2 font-bold text-[#163e5c]">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl md:text-[26px] mb-2 font-bold text-[#163e5c]">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#163e5c] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
};