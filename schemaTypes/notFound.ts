import { defineField } from "sanity";

const notFound = {
  name: "notFound",
  title: "Страница 404",
  type: "document",
  fields: [
    defineField({
      name: 'notFoundTitle',
      title: 'Заголовок страницы 404',
      type: 'string',
    }),
    defineField({
      name: 'notFoundDescription',
      title: 'Описание страницы 404',
      type: 'text',
      description: 'Краткий текст, который выводится в блоке',
    }),
    defineField({
      name: 'workingHours',
      title: 'Рабочие часы',
      type: 'string',
    }),
    defineField({
      name: 'notFoundLinks',
      title: 'Ссылки на соцсети и мессенджеры',
      type: 'array',
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
      name: 'mainPageText',
      title: 'Текст, который отправляет на главную страницу',
      type: 'string',
    }),
    defineField({
      name: 'mainPageLink',
      title: 'Ссылка на главную страницу',
      type: 'object',
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
    }),
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
};

export default notFound;