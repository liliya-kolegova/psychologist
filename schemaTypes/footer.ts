import { defineField } from "sanity";

const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: 'contactsTitle',
      title: 'Contacts Title',
      type: 'string',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
    }),
    defineField({
      name: "phones",
      title: "Phones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "phoneNumber",
              title: "Phone Number",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactsDescription',
      title: 'Contacts Description',
      type: 'text',
    }),
    defineField({
      name: 'contactLinks',
      title: 'Contact Links',
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
      name: 'mainFullImage',
      title: 'Main Full Image',
      type: 'image',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
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
      name: 'paymentLogos',
      title: 'Payment Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'paymentLogo',
              title: 'Payment Logo',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'rightsText',
      title: 'Rights Text',
      type: 'string',
    }),
    defineField({
      name: 'copyrigthText',
      title: 'Copyrigth Text',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
};

export default footer;