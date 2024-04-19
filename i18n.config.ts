const languages = [
  { id: 'ru', title: 'Russian', isDefault: true },
  { id: 'kz', title: 'Kazakh' },
];

const i18n = {
  languages,
  base: languages.find((item) => item.isDefault)?.id,
};

export { i18n };