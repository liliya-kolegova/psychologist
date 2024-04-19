import { defineField, defineType } from 'sanity';

const mainPage = {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pretitle',
      title: 'Pretitle',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localizedSlug',
    }),
    defineField({
      name: 'textButton',
      title: 'Text Button',
      type: 'string',
    }),
    defineField({
      name: 'linkButton',
      title: 'Link Button',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'descriptionBig',
      title: 'Description Big',
      type: 'string',
    }),
    // defineField({
    //   name: '_translations',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'translation.metadata' }],
    //     },
    //   ],
    // }),
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