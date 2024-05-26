import Footer from '@/components/Footer/Footer'
import { getNotFoundByLang } from "@/libs/sanityQueries";
import React from 'react'
import { Metadata } from "next";
import NotFound from '@/components/NotFound/NotFound';

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const data = await getNotFoundByLang(params.lang);

  return {
    title: data.notFoundTitle,
    description: data.notFoundDescription,
  };
}

const NotFoundPage = async ({ params }: any) => {

  const notFound = await getNotFoundByLang(params.lang);

  return (
    <>
      <NotFound
        title={notFound.notFoundTitle}
        description={notFound.notFoundDescription}
        workingHours={notFound.workingHours}
        links={notFound.notFoundLinks}
        mainPageText={notFound.mainPageText}
        mainPageLink={notFound.mainPageLink}
        params={params}
      />
    </>
  )
}

export default NotFoundPage