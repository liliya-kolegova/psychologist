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
    defineField({
      name: 'requestsTitle',
      title: 'Requests Title',
      type: 'string',
    }),
    defineField({
      name: 'requestsDescription',
      title: 'Requests Description',
      type: 'text',
    }),
    defineField({
      name: 'requestsCards',
      title: 'Requests Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Card',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'content',
              title: 'Content',
              type: 'blockContent',
            },
          ]
        }
      ]
    }),
    defineField({
      name: 'requestsText',
      title: 'Requests Text',
      type: 'text',
    }),
    defineField({
      name: 'requestsLinks',
      title: 'Requests Links',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'requestsImage',
      title: 'Requests Image',
      type: 'image',
    }),
    defineField({
      name: 'offerTitle',
      title: 'Offer Title',
      type: 'string',
    }),
    defineField({
      name: 'offerDescription',
      title: 'Offer Description',
      type: 'text',
    }),
    defineField({
      name: 'offerLinks',
      title: 'Offer Links',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'educationTitle',
      title: 'Education Title',
      type: 'string',
    }),
    defineField({
      name: 'educationBullets',
      title: 'Education Bullets',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "bulletTitle",
              title: "Bullet Title",
              type: "string",
            }),
            defineField({
              name: "bulletText",
              title: "Bullet Text",
              type: "text",
            }),
            defineField({
              name: "size",
              title: "Size",
              type: "string",
              options: {
                list: [
                  { title: "Small", value: "small" },
                  { title: "Medium", value: "medium" },
                  { title: "Large", value: "large" }
                ],
                layout: "dropdown"
              }
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'string',
              options: {
                list: [
                  { title: 'No', value: 'inherit' },
                  { title: 'Yellow', value: 'yellow' },
                  { title: 'Gray', value: 'gray' },
                ],
                layout: 'dropdown',
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'degreeTitle',
      title: 'Degree Title',
      type: 'string',
    }),
    defineField({
      name: 'degreeBullets',
      title: 'Degree Bullets',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "bulletTitle",
              title: "Bullet Title",
              type: "string",
            })
          ],
        },
      ],
    }),
    defineField({
      name: 'degreeText',
      title: 'Degree Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'diplomas',
      title: 'Diplomas',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "diplomaTitle",
              title: "Diploma Title",
              type: "string",
            }),
            defineField({
              name: "diplomaName",
              title: "Diploma Name",
              type: "string",
            }),
            defineField({
              name: "diplomaImage",
              title: "Diploma Image",
              type: "image",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
    }),
    defineField({
      name: 'videoLink',
      title: 'Video Link',
      type: 'string',
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'image',
    }),
    defineField({
      name: 'methodsTitle',
      title: 'Methods Title',
      type: 'string',
    }),
    defineField({
      name: 'methodsAccordion',
      title: 'Methods Accordion',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'accordionTitle',
              title: 'Accordion Title',
              type: 'string',
            }),
            defineField({
              name: 'accordionContent',
              title: 'Accordion Content',
              type: 'blockContent',
            }),
          ],
        },
      ],
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