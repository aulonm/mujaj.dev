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

export interface Project {
  title: string;
  slug: Slug;
  mainImage: Image;
  completed: string;
  body: Array<TypedObject>;
  role: string;
}

export interface SiteSettings {
  title: string;
  description: string;
  keywords: Array<string>;
  author: SanityReference;
}

export interface Category {
  title: string;
  description: string;
  1;
}

export interface Portfolio {
  title: string;
  slug: Slug;
  imagesGallery: Array<Image>;
  categories: SanityReference;
  updatedAt: string;
  body: Array<TypedObject>;
}
