import { defineType, defineField } from "sanity";

const textImageBlock = defineType({
  name: 'textImageBlock',
  title: 'Блок с текстом и картинкой',
  type: 'object',
  description: 'Блок с текстом и картинкой. Можно выбрать расположение текста и изображения. Также можно выбрать цвет фона и границу блока.',
  fields: [
    defineField({
      name: 'direction',
      title: 'Расположение',
      type: 'string',
      options: {
        list: [
          { title: 'Текст справа', value: 'textRight' },
          { title: 'Текст слева', value: 'textLeft' }
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: 'textColor',
      title: 'Цвет текста',
      type: 'string',
      description: 'Это не обязательный параметр. Это цвет текста. Его нужно вводить вручную в формате HEX. По умолчанию цвет текста фирменный синий #163E5C'
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Цвет фона',
      type: 'string',  // Используйте тип color для выбора цвета
      description: 'Это не обязательный параметр. Это цвет фона текста. Его нужно вводить вручную в формате HEX. Если выбираем фон, то нужно выбрать и цвет текста, чтобы текст был виден на фоне. При выборе фона автоматически появляется внутренний отступ и закругленные углы'
    }),
  ]
});

export default textImageBlock;
