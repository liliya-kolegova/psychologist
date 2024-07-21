import { defineField, defineType } from "sanity";

const blogPage = defineType({
  name: "blogPage",
  title: "Главная блога (не трогать)",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Мета заголовок страницы",
      type: "string",
      description:
        "Заголовок страницы в поисковой выдаче. Максимум 70 символов.",
    }),
    defineField({
      name: "metaDescription",
      title: "Мета описание страницы",
      type: "string",
      description:
        "Описание страницы в поисковой выдаче. Максимум 160 символов.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "localizedSlug",
    }),
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
});

export default blogPage;
