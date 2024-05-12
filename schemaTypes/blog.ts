import { defineField } from "sanity";

const blog = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article title',
      type: 'string',
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'localizedSlug',
    // }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview image',
      type: 'image',
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
      description: 'A short description of the article',
    }),
    defineField({
      name: 'firstContent',
      title: 'First Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        { type: 'textImageBlock' },
        { type: 'doubleTextBlock' },
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
}

export default blog;