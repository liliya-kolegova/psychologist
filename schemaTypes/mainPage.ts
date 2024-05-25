import { defineField, defineType } from 'sanity';

const mainPage = {
  name: 'mainPage',
  title: 'Главная страница',
  type: 'document',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Мета Заголовок',
      type: 'string',
      description: 'Заголовок страницы в поисковой выдаче. Максимум 70 символов',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Мета Описание',
      type: 'string',
      description: 'Описание страницы в поисковой выдаче. Максимум 160 символов',
    }),
    defineField({
      name: 'pretitle',
      title: 'Надзаголовок',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description: 'Основной заголовок страницы',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localizedSlug',
      description: 'URL страницы, тут ничего менять не надо',
    }),
    defineField({
      name: 'textButton',
      title: 'Текст на кнопке',
      type: 'string',
    }),
    defineField({
      name: 'linkButton',
      title: 'Ссылка на кнопке',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Главное изображение',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Текст описания',
      type: 'text',
    }),
    defineField({
      name: 'descriptionBig',
      title: 'Текст описания большим шрифтом',
      type: 'string',
    }),
    defineField({
      name: 'requestsTitle',
      title: 'Заголовок секции Запросы',
      type: 'string',
    }),
    defineField({
      name: 'requestsDescription',
      title: 'Описание секции Запросы',
      type: 'text',
    }),
    defineField({
      name: 'requestsCards',
      title: 'Карточки секции Запросы',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Запрос',
          fields: [
            {
              name: 'icon',
              title: 'Иконка',
              type: 'image',
              options: {
                hotspot: true
              },
              description: 'Иконка слева от текста',
            },
            {
              name: 'content',
              title: 'Текст',
              type: 'blockContent',
              description: 'Здесь добавляем заголовки, подзаголовки и сам текст. Все можно форматировать'
            },
          ]
        }
      ]
    }),
    defineField({
      name: 'requestsText',
      title: 'Текст секции Запросы',
      type: 'text',
      description: 'Текст под карточками заглавными буквами',
    }),
    defineField({
      name: 'requestsLinks',
      title: 'Ссылки секции Запросы',
      type: 'array',
      description: 'Ссылки в мессенджеры и соцсети',
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
      name: 'requestsImage',
      title: 'Изображение секции Запросы',
      type: 'image',
    }),
    defineField({
      name: 'offerTitle',
      title: 'Заголовок конверсионного блока',
      type: 'string',
    }),
    defineField({
      name: 'offerDescription',
      title: 'Описание конверсионного блока',
      type: 'text',
    }),
    defineField({
      name: 'offerLinks',
      title: 'Ссылки конверсионного блока',
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
      name: 'offerLinksShort',
      title: 'Ссылки конверсионного блока для мобильных устройств',
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
      name: 'educationTitle',
      title: 'Заголовок секции Образование',
      type: 'string',
    }),
    defineField({
      name: 'educationBullets',
      title: 'Буллеты секции Образование',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "bulletTitle",
              title: "Заголовок буллета",
              type: "string",
            }),
            defineField({
              name: "bulletText",
              title: "Текст буллета",
              type: "text",
            }),
            defineField({
              name: "size",
              title: "Размер буллета",
              type: "string",
              options: {
                list: [
                  { title: "Маленький", value: "small" },
                  { title: "Средний", value: "medium" },
                  { title: "Большой", value: "large" }
                ],
                layout: "dropdown"
              }
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Цвет фона буллета',
              type: 'string',
              options: {
                list: [
                  { title: 'Нет цвета', value: 'inherit' },
                  { title: 'Желтый', value: 'yellow' },
                  { title: 'Серый', value: 'gray' },
                ],
                layout: 'dropdown',
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'degreeTitle',
      title: 'Заголовок секции Дипломы',
      type: 'string',
    }),
    defineField({
      name: 'degreeBullets',
      title: 'Буллеты секции Дипломы',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "bulletTitle",
              title: "Текст буллета",
              type: "string",
            })
          ],
        },
      ],
    }),
    defineField({
      name: 'degreeText',
      title: 'Текст секции Дипломы',
      type: 'blockContent',
      description: 'Текст в правой колонке',
    }),
    defineField({
      name: 'diplomas',
      title: 'Дипломы',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "diplomaTitle",
              title: "Степень",
              type: "string",
            }),
            defineField({
              name: "diplomaName",
              title: "Название диплома",
              type: "string",
            }),
            defineField({
              name: "diplomaImage",
              title: "Изображение диплома",
              type: "image",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'videoTitle',
      title: 'Заголовок секции Видео',
      type: 'string',
    }),
    defineField({
      name: 'videoLink',
      title: 'Ссылка на видео из Ютуба',
      type: 'string',
    }),
    defineField({
      name: 'posterImage',
      title: 'Заставка для видео',
      type: 'image',
    }),
    defineField({
      name: 'methodsTitle',
      title: 'Заголовок секции Методы',
      type: 'string',
    }),
    defineField({
      name: 'methodsAccordion',
      title: 'Список методов',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'accordionTitle',
              title: 'Заголовок метода',
              type: 'string',
            }),
            defineField({
              name: 'accordionContent',
              title: 'Описание метода',
              type: 'blockContent',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'therapyStagesTitle',
      title: 'Заголовок секции Этапы',
      type: 'string',
    }),
    defineField({
      name: 'therapyStagesImage',
      title: 'Изображение секции Этапы',
      type: 'image',
    }),
    defineField({
      name: 'therapyStages',
      title: 'Этапы терапии',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'stageIcon',
              title: 'Иконка',
              type: 'image',
            }),
            defineField({
              name: 'stageTitle',
              title: 'Текст',
              type: 'string',
            }),
            defineField({
              name: 'stageColor',
              title: 'Цвет фона',
              type: 'string',
            }),
            defineField({
              name: 'textColor',
              title: 'Цвет текста',
              type: 'string',
            })
          ],
        },
      ],
    }),
    defineField({
      name: 'consultationsTitle',
      title: 'Заголовок секции Консультации',
      type: 'string',
    }),
    defineField({
      name: 'consultations',
      title: 'Список консультаций',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'consultationType',
              title: 'Тип',
              type: 'string',
            }),
            defineField({
              name: 'consultationTime',
              title: 'Время',
              type: 'string',
            }),
            defineField({
              name: 'constultationTitle',
              title: 'Название',
              type: 'string',
            }),
            defineField({
              name: 'consultationPrice',
              title: 'Цена',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'gamesTitle',
      title: 'Заголовок секции Трансформационные Игры',
      type: 'string',
    }),
    defineField({
      name: 'games',
      title: 'Список игр',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'gameType',
              title: 'Тип',
              type: 'string',
            }),
            defineField({
              name: 'gameQuantity',
              title: 'Количество участников',
              type: 'string',
            }),
            defineField({
              name: 'gameTitle',
              title: 'Название',
              type: 'string',
            }),
            defineField({
              name: 'gamePrice',
              title: 'Цена',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'reviewsTitle',
      title: 'Заголовок секции Отзывы',
      type: 'string',
    }),
    defineField({
      name: 'reviews',
      title: 'Список отзывов',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'reviewTitle',
              title: 'Заголовок отзыва',
              type: 'string',
            }),
            defineField({
              name: 'reviewText',
              title: 'Текст отзыва',
              type: 'blockContent',
            }),
            defineField({
              name: 'reviewPermission',
              title: 'Текст разрешения на публикацию',
              type: 'string',
              description: 'Отзыв опубликован с разрешения клиента. Это нужно указать, если отзыв не анонимный',
            }),
            defineField({
              name: 'reviewVideoLink',
              title: 'Ссылка на видеоотзыв',
              type: 'string',
            }),
            defineField({
              name: 'reviewPosterImage',
              title: 'Заставка для видеоотзыва',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    // optional
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
}

export default mainPage;