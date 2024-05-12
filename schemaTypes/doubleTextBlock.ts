import { defineType, defineField } from "sanity";

const doubleTextBlock = defineType({
  name: 'doubleTextBlock',
  title: 'Double Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'doubleTextBlockTitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'leftTextBlock',
      title: 'Left Text Block',
      type: 'blockContentWithStyle',
    }),
    defineField({
      name: 'rightTextBlock',
      title: 'Right Text Block',
      type: 'blockContentWithStyle',
    }),
  ]
});

export default doubleTextBlock;