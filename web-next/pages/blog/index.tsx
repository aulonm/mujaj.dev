import PageLayout from '@/components/PageLayout';
import { PostCard } from '@/components/Blog/PostCard';
import { getClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

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

interface Props {}

export const Blog = (props: Props) => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default Blog;
