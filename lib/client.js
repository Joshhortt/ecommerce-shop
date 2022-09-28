import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'iq4m56nm',
    dataset: 'production',
    apiVersion: '2022-09-29',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  });
  
  const builder = imageUrlBuilder(client);

  export const urlFor = (source) => builder.image(source);