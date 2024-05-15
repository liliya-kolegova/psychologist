export type Image = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
  url?: string;
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

export type EducationBullet = {
  _key: string;
  bulletTitle: string;
  bulletText: string;
  size: 'small' | 'medium' | 'large';
  backgroundColor: 'inherit' | 'yellow' | 'gray';
};

export type DegreeBullet = {
  _key: string;
  bulletTitle: string;
};

export type Diploma = {
  _key: string;
  diplomaTitle: string;
  diplomaName: string;
  diplomaImage: Image;
};

export type MethodsAccordion = {
  _key: string;
  title: string;
  content: any;
};

export type TherapyStage = {
  _key: string;
  stageIcon: Image;
  stageTitle: string;
  stageColor: string;
  textColor: string;
};

export type Consultation = {
  _key: string;
  consultationType: string;
  consultationTime: string;
  constultationTitle: string;
  consultationPrice: string;
};

export type Game = {
  _key: string;
  gameType: string;
  gameQuantity: string;
  gameTitle: string;
  gamePrice: string;
};

export type Review = {
  _key: string;
  reviewTitle: string;
  reviewPermission: string;
  reviewText: any;
  reviewVideoLink: string;
  reviewPosterImage: Image;
};

export type PhoneNumber = {
  _key: string;
  phoneNumber: string;
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
  offerLinksShort: Link[];
  educationTitle: string;
  educationBullets: EducationBullet[];
  degreeTitle: string;
  degreeBullets: DegreeBullet[];
  degreeText: any;
  diplomas: Diploma[];
  videoTitle: string;
  videoLink: string;
  posterImage: Image;
  methodsTitle: string;
  methodsAccordion: MethodsAccordion[];
  therapyStagesTitle: string;
  therapyStagesImage: Image;
  therapyStages: TherapyStage[];
  consultationsTitle: string;
  consultations: Consultation[];
  gamesTitle: string;
  games: Game[];
  reviewsTitle: string;
  reviews: Review[];
  blogImageWide: Image;
  blogImageNarrow: Image;
  contactsTitle: string;
  workingHours: string;
  phones: PhoneNumber[];
  contactsDescription: string;
}