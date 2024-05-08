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
      name: 'offerLinksShort',
      title: 'Offer Links Short',
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
    defineField({
      name: 'therapyStagesTitle',
      title: 'Therapy Stages Title',
      type: 'string',
    }),
    defineField({
      name: 'therapyStagesImage',
      title: 'Therapy Stages Image',
      type: 'image',
    }),
    defineField({
      name: 'therapyStages',
      title: 'Therapy Stages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'stageIcon',
              title: 'Stage Icon',
              type: 'image',
            }),
            defineField({
              name: 'stageTitle',
              title: 'Stage Title',
              type: 'string',
            }),
            defineField({
              name: 'stageColor',
              title: 'Stage Color',
              type: 'string',
            }),
            defineField({
              name: 'textColor',
              title: 'Text Color',
              type: 'string',
            })
          ],
        },
      ],
    }),
    defineField({
      name: 'consultationsTitle',
      title: 'Consultations Title',
      type: 'string',
    }),
    defineField({
      name: 'consultations',
      title: 'Consultations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'consultationType',
              title: 'Consultation Type',
              type: 'string',
            }),
            defineField({
              name: 'consultationTime',
              title: 'Consultation Time',
              type: 'string',
            }),
            defineField({
              name: 'constultationTitle',
              title: 'Consultation Title',
              type: 'string',
            }),
            defineField({
              name: 'consultationPrice',
              title: 'Consultation Price',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'gamesTitle',
      title: 'Games Title',
      type: 'string',
    }),
    defineField({
      name: 'games',
      title: 'Games',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'gameType',
              title: 'Game Type',
              type: 'string',
            }),
            defineField({
              name: 'gameQuantity',
              title: 'Game Quantity',
              type: 'string',
            }),
            defineField({
              name: 'gameTitle',
              title: 'Game Title',
              type: 'string',
            }),
            defineField({
              name: 'gamePrice',
              title: 'Game Price',
              type: 'string',
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