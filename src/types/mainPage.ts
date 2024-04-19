type Image = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

export type MainPage = {
  _type: 'mainPage';
  _id: string;
  _rev: string;
  title: string;
  slug: string;
  textButton: string;
  linkButton: string;
  mainImage: Image;
}