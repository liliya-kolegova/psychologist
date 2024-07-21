type Image = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
  url?: string;
};

export type BlockContentWithStyle = {
  _key: string;
  _type: string;
  content: any;
  backgroundColor: string;
  textColor: string;
  border: string;
};

export type TextImageBlock = {
  _key: string;
  _type: string;
  direction: "textRight" | "textLeft";
  text: any;
  image: Image;
  textColor: string;
  backgroundColor: string;
};

export type DoubleTextBlock = {
  _key: string;
  _type: string;
  doubleTextBlockTitle: string;
  leftTextBlock: BlockContentWithStyle;
  rightTextBlock: BlockContentWithStyle;
  backgroundColor: string;
  border: string;
};

export type UnknownBlock = {
  _key: string;
  _type: string;
};

export type Blog = {
  _id: string;
  _type: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  // slug: string;
  previewImage: Image;
  shortDescription: string;
  firstContent: any;
  contentBlocks: Array<TextImageBlock | DoubleTextBlock>;
  videoTitle: string;
  videoLink: string;
  posterImage: Image;
  publishedAt: string;
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
