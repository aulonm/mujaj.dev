import { getClient } from '@/lib/sanity';
import { Post } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { groq } from 'next-sanity';

interface Props {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`*[_type == "post" && !(_id in path('drafts.**'))] | order(_createdAt asc){slug}`;

  const sanityClient = getClient(false);
  const data = await sanityClient.fetch<{ slug: Slug }[]>(query);

  return {
    paths: data.map((d) => ({
      params: { id: d.slug.current },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const query = groq`*[_type == "post" && slug.current == "${ctx.params?.id}" && !(_id in path('drafts.**'))]`;

  const client = getClient(false);

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
};

function Post(props: Props) {
  return <></>;
}

export default Post;
