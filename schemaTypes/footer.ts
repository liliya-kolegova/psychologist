import { defineField } from "sanity";

const footer = {
  name: "footer",
  title: "Футер (подвал сайта)",
  type: "document",
  fields: [
    defineField({
      name: 'contactsTitle',
      title: 'Заголовок блока контактов',
      type: 'string',
      description: 'Этот блок будет на всех страницах сайта',
    }),
    defineField({
      name: 'workingHours',
      title: 'Рабочие часы',
      type: 'string',
    }),
    defineField({
      name: "phones",
      title: "Номера телефонов",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "phoneNumber",
              title: "Номер телефона",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactsDescription',
      title: 'Описание блока контактов',
      type: 'text',
      description: 'Краткий текст, который выводится в блоке',
    }),
    defineField({
      name: 'contactLinks',
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
      name: 'mainFullImage',
      title: 'Изображение',
      type: 'image',
      description: 'Изображение на всю ширину страницы',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Логотип',
      type: 'image',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Навигационные ссылки',
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
      name: 'paymentLogos',
      title: 'Логотипы платежных систем',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'paymentLogo',
              title: 'Логотип платежной системы',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Выходные данные',
      type: 'string',
    }),
    defineField({
      name: 'rightsText',
      title: 'Копирайт верхний',
      type: 'string',
    }),
    defineField({
      name: 'copyrigthText',
      title: 'Копирайт нижний',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
};

export default footer;