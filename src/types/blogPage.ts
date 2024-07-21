export type BlogPage = {
  _type: "blogPage";
  _id: string;
  _rev: string;
  metaTitle: string;
  metaDescription: string;
  language: string;
  slug: {
    [lang: string]: {
      current: string;
    };
  };
  _translations: [
    {
      slug: {
        [lang: string]: {
          current: string;
        };
      };
    }
  ];
};
