import PageLayout from '@/components/PageLayout';
import type { NextPage } from 'next';
import { getClient } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { Banner } from '@/components/Banner';
import { PostCard } from '@/components/Blog/PostCard';

export async function getStaticProps() {
  const query = groq`*[_type == "post" && !(_id in path('drafts.**'))] | order(_createdAt asc)`;

  const client = getClient(false);

  const posts = await client.fetch(query);

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage = (props) => {
  console.log(props.posts);
  return (
    <PageLayout>
      <Banner heading="Mujaj dev" subheading="Welcome to:">
        <p className="p-sm">
          A blog / portofolio for my own creations within{' '}
          <span className="border-primary inline-flex border-b-4 leading-tight">
            development
          </span>{' '}
          and{' '}
          <span className="border-primary inline-flex border-b-4 leading-tight">
            photography
          </span>
          .
        </p>
      </Banner>
      {props.posts.length > 0 && (
        <section className="mx-auto pt-10">
          <h2 className="mb-4 text-3xl font-bold">Latests Posts</h2>
          <ul className="grid grid-cols-[1fr_1fr] items-stretch gap-8">
            {props.posts.map((post) => (
              <li key={post._id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageLayout>
  );
};

export default Home;
