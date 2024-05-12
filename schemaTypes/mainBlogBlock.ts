const mainBlock = {
  name: 'mainBlock',
  title: 'Main Blog Block',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Text Right, Image Left', value: 'textRightImageLeft' },
          { title: 'Text Left and Right', value: 'textLeftAndRight' },
          { title: 'Image Right, Text Left', value: 'imageRightTextLeft' },
        ],
        layout: 'select',
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export default mainBlock;