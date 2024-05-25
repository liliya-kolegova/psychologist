import { defineType, defineField } from "sanity";

const blockContentWithStyle = defineType({
  name: 'blockContentWithStyle',
  title: 'Block Content with Style',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Редактор текста',
      type: 'blockContent',  // Используем ваш существующий тип blockContent для текстового контента
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
      type: 'string',
      description: 'Это не обязательный параметр. Это цвет фона текста. Его нужно вводить вручную в формате HEX. Если выбираем фон, то нужно выбрать и цвет текста, чтобы текст был виден на фоне. При выборе фона автоматически появляется внутренний отступ и закругленные углы'
    }),
  ]
});

export default blockContentWithStyle;