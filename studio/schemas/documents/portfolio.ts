import {defineType, defineField} from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagesGallery',
      title: 'Images Gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      title: 'Updated at',
      description: 'When was this gallery last updated',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
      description: 'Information about this gallery',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
