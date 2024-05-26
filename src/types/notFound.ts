type PhoneNumber = {
  _key: string;
  phoneNumber: string;
};

type Link = {
  _key: string;
  label: string;
  link: string;
};

export type NotFound = {
  notFoundTitle: string;
  notFoundDescription: string;
  workingHours: string;
  notFoundLinks: Link[];
  mainPageText: string;
  mainPageLink: Link;
}