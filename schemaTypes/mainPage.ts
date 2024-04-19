import { defineField, defineType } from 'sanity';

const mainPage = {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
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