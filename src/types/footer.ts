type Image = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
  url?: string;
};

type Link = {
  _key: string;
  label: string;
  link: string;
};

export type PaymentLogo = {
  _key: string;
  paymentLogo: Image;
};

export type Footer = {
  mainFullImage: Image;
  footerLogo: Image;
  footerLinks: Link[];
  paymentLogos: PaymentLogo[];
  footerText: string;
  rightsText: string;
  copyrigthText: string;
}