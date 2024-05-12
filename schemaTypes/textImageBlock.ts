import { defineType, defineField } from "sanity";

const textImageBlock = defineType({
  name: 'textImageBlock',
  title: 'Text with Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'direction',
      title: 'Direction',
      type: 'string',
      options: {
        list: [
          { title: 'Text on Right', value: 'textRight' },
          { title: 'Text on Left', value: 'textLeft' }
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',  // Используйте тип color для выбора цвета
      description: 'Select a background color for the block.'
    }),
    defineField({
      name: 'border',
      title: 'Border',
      type: 'string',
      description: 'CSS value for the border (e.g., "1px solid black")',
    }),
  ]
});

export default textImageBlock;
