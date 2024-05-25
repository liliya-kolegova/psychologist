import { defineField } from "sanity";

const header = {
  name: "header",
  title: "Хэдер (шапка сайта)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок хэдера",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Логотип",
      type: "image",
    }),
    defineField({
      name: "phones",
      title: "Номера телефонов",
      type: "array",
      description: "Номера телефонов, которые отображаются в хэдере",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "phone",
              title: "Номер телефона",
              type: "string",
            }),
            defineField({
              name: "phoneLabel",
              title: "Мессенджер",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "menuItems",
      title: "Пункты меню",
      type: "array",
      description: "Пункты меню хэдера",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Название",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Ссылка",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "linkItems",
      title: "Контактные ссылки",
      type: "array",
      description: "Ссылки на соцсети и мессенджеры",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Название",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Ссылка",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "languageLabel",
      title: "Метка языка",
      type: "string",
      description: "Метка языка на хэдере",
    }),
    defineField({
      name: "languageLink",
      title: "Ссылка на страницу",
      type: "string",
      description: "Ссылка на страницу на сайте на другом языке",
    }),
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
};

export default header;