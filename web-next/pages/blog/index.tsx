import { PostCard } from '@/components/Blog/PostCard';
import { getClient } from '@/lib/sanity';
import { groq } from 'next-sanity';
import type { GetStaticProps } from 'next';
import { Post } from '@/types';

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const query = groq`*[_type == "post" && !(_id in path('drafts.**'))] | order(_createdAt asc)`;

  const client = getClient(false);

  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

interface Props {
  posts: Array<Post>;
}

export const Blog = (props: Props) => {
  return (
    <>
      <h1>Blog</h1>
      <div className="blog-container">
        {props.posts.length ? (
          <ul className="grid grid-cols-[1fr_1fr] items-stretch gap-8">
            {props.posts.map((post) => (
              <li key={post._id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <h3>Nothing here yet...</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
