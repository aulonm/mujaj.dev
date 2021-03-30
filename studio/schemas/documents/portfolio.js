export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagesGallery',
      title: 'Images Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'updatedAt',
      type: 'datetime',
      title: 'Updated at',
      description: 'When was this gallery last updated'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
      description: 'Information about this gallery'
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
