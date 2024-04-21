export type Image = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
  url?: string;  // URL может быть необязательным, если управление URL происходит на уровне клиента или сервера
};

type BlockContent = {
  _key: string;
  _type: string;
  style: string;
  children: {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }[];
  markDefs: any[];
};

type RequestsCard = {
  _key: string;
  _type: string;
  icon: Image;
  content: any;
};

type RequestsLink = {
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
  requestsLinks: RequestsLink[];
  requestsImage: Image;
}