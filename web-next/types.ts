import type { Image, Slug, TypedObject } from '@sanity/types';

export interface SanityReference {
  _ref: string;
}

export interface Author {
  name: string;
  slug: Slug;
  image: Image;
  bio: Array<TypedObject>;
}

export interface Post {
  title: string;
  slug: Slug;
  publishedAt: string;
  mainImage: Image;
  excerpt: Array<TypedObject>;
  authors: Array<Author>;
  categories: Array<SanityReference>;
  body: Array<TypedObject>;
}
