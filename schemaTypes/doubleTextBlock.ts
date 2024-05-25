import { defineType, defineField } from "sanity";

const doubleTextBlock = defineType({
  name: 'doubleTextBlock',
  title: 'Блок с двумя текстовыми блоками слева и справа',
  type: 'object',
  fields: [
    defineField({
      name: 'doubleTextBlockTitle',
      title: 'Основной заголовок (опционально)',
      type: 'string',
      description: 'Это не обязательный параметр. Этот блок будет отображаться над текстом блока. Иногда он нужен, а иногда можно обойтись без него',
    }),
    defineField({
      name: 'leftTextBlock',
      title: 'Текст слева',
      type: 'blockContentWithStyle',
    }),
    defineField({
      name: 'rightTextBlock',
      title: 'Текст справа',
      type: 'blockContentWithStyle',
    }),
  ]
});

export default doubleTextBlock;