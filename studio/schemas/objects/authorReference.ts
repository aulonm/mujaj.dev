import {defineType} from 'sanity'

export const authorReference = defineType({
  name: 'authorReference',
  type: 'object',
  title: 'Author reference',
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset',
    },
  },
})
