export type Image = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
  url?: string;  // URL может быть необязательным, если управление URL происходит на уровне клиента или сервера
};

type RequestsCard = {
  _key: string;
  _type: string;
  icon: Image;
  content: any;
};

export type Link = {
  _key: string;
  label: string;
  link: string;
};

export type MainPage = {
  _type: 'mainPage';
  _id: string;
  _rev: string;
  pretitle: string;
  title: string;
  slug: string;
  textButton: string;
  linkButton: string;
  mainImage: Image;
  description: string;
  descriptionBig: string;
  requestsTitle: string;
  requestsDescription: string;
  requestsCards: RequestsCard[];
  requestsText: string;
  requestsLinks: Link[];
  requestsImage: Image;
  offerTitle: string;
  offerDescription: string;
  offerLinks: Link[];
}