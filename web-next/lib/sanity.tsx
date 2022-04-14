import { createClient } from 'next-sanity';
import {
  PortableText as PortableTextComponent,
  PortableTextProps,
} from '@portabletext/react';
import getConfig from 'next/config';
import NextLink from 'next/link';

import { config } from './config';

const { publicRuntimeConfig } = getConfig();

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
