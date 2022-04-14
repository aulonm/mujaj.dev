import { ClientConfig } from 'next-sanity';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const config: ClientConfig = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: publicRuntimeConfig.SANITY_DATASET || 'production',
  projectId: publicRuntimeConfig.SANITY_PROJECT_ID || 'yw21ya6w',
  apiVersion: '2022-04-14', // or today's date for latest
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production',
  // We always need the token when working with the dev dataset, as it is private
  token:
    publicRuntimeConfig.SANITY_DATASET === 'dev'
      ? publicRuntimeConfig.SANITY_API_TOKEN
      : undefined,
};
