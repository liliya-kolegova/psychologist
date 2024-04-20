import { defineField } from "sanity";

const header = {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
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
              name: "phone",
              title: "Phone",
              type: "string",
            }),
            defineField({
              name: "phoneLabel",
              title: "Phone Label",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
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
      name: "linkItems",
      title: "Link Items",
      type: "array",
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
      name: "languageLabel",
      title: "Language Label",
      type: "string",
    }),
    defineField({
      name: "languageLink",
      title: "Language Link",
      type: "string",
    }),
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
};

export default header;