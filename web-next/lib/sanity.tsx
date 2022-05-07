import { createClient } from 'next-sanity';
import {
  PortableText as PortableTextComponent,
  PortableTextProps,
} from '@portabletext/react';
import getConfig from 'next/config';
import NextLink from 'next/link';
import createImageUrlBuilder from '@sanity/image-url';

import { config } from './config';

const { publicRuntimeConfig } = getConfig();

export const ImageBuilder = (value) =>
  createImageUrlBuilder({
    projectId: config.projectId,
    dataset: config.dataset,
  })
    .image(value)
    .fit('max')
    .auto('format')
    .url();

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

export const PortableText = (props: PortableTextProps) => (
  <PortableTextComponent
    {...props}
    components={{
      types: {
        url: ({ value }) => {
          return <NextLink href={value.url}>{value.value}</NextLink>;
        },
      },
    }}
  />
);

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: publicRuntimeConfig.SANITY_API_TOKEN,
});

export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : client;
