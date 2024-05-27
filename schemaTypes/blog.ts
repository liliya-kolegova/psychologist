import { defineField } from "sanity";

const blog = {
  name: 'blog',
  title: 'Блог',
  type: 'document',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Мета заголовок статьи',
      type: 'string',
      description: 'Заголовок страницы в поисковой выдаче. Максимум 70 символов. Может дублироваться с основным заголовоком',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Мета описание статьи',
      type: 'string',
      description: 'Описание страницы в поисковой выдаче. Максимум 160 символов. Сюда желательно включить основную информацию, благодаря которой пользователь захочет кликнуть на статью',
    }),
    defineField({
      name: 'title',
      title: 'Заголовок статьи',
      type: 'string',
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'localizedSlug',
    // }),
    defineField({
      name: 'slug',
      title: 'Ссылка',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      description: 'Часть URL-адреса статьи. Должна быть уникальной для каждой статьи. Достаточно просто нажать на кнопку Generate — и ссылка будет сгенерирована автоматически',
    }),
    defineField({
      name: 'previewImage',
      title: 'Превью статьи',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Основное изображение статьи',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Краткое описание статьи',
      type: 'text',
      description: 'Краткое описание статьи, которое будет отображаться на главной странице и на странице блога',
    }),
    defineField({
      name: 'firstContent',
      title: 'Начальный текст статьи',
      type: 'blockContent',
      description: 'Текст, который отображается в начале статьи слева от превью. Желательно использовать здесь не больше трех абзацев. После публикации проверить. Если много текста, то сократить его',
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Блоки контента',
      type: 'array',
      description: 'Блоки контента, которые будут отображаться в статье. Здесь будет основное содержание статьи',
      of: [
        { type: 'textImageBlock' },
        { type: 'doubleTextBlock' },
      ]
    }),
    defineField({
      name: 'videoTitle',
      title: 'Загооловок секции Видео',
      type: 'string',
    }),
    defineField({
      name: 'videoLink',
      title: 'Ссылка на видео',
      type: 'string',
    }),
    defineField({
      name: 'posterImage',
      title: 'Изображение для заставки',
      type: 'image',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
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