import { defineType, defineField } from "sanity";

const blockContentWithStyle = defineType({
  name: 'blockContentWithStyle',
  title: 'Block Content with Style',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',  // Используем ваш существующий тип blockContent для текстового контента
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Select a background color for the block.'
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
    }),
  ]
});

export default blockContentWithStyle;