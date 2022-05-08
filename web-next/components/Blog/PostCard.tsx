import NextImage from 'next/image';
import NextLink from 'next/link';
import classNames from 'clsx';
import { getImageDimensions } from '@sanity/asset-utils';
import { ImageBuilder } from '@/lib/sanity';

interface PostCardProps {
  post: {};
  isLarge?: boolean;
}

export const PostCard = (props: PostCardProps) => {
  console.log(props.post.mainImage);
  let dimensions;
  if (props.post.mainImage) {
    dimensions = getImageDimensions(props.post.mainImage);
  }

  const postUrl = (slug: { current: string }) => `/blog/${slug.current}`;

  const getAuthors = (post) => {
    if (post.authors.length > 1) {
      let authors = '';
      post.authors.forEach((author) => {
        if (authors.length === 0) {
          authors = author.author.name;
        } else {
          authors = `${authors} / ${author.author.name}`;
        }
      });
      return authors;
    }
    return post.authors[0].author.name;
  };

  return (
    <div
      className={classNames(
        'dev-post-card bg-card relative flex h-full flex-col',
        { 'bg-secondary relative text-black': props.isLarge }
      )}
    >
      <div className="relative flex w-full flex-auto">
        <NextLink href={postUrl(props.post.slug)}>
          <a>
            <div className="dev-card-image relative flex w-full flex-auto">
              {props.post.mainImage ? (
                <NextImage
                  className="dev-card-image relative flex w-full flex-auto"
                  image-class="block w-full h-full object-cover absolute"
                  src={ImageBuilder(props.post.mainImage.asset)}
                  width={dimensions.width}
                  height={dimensions.height}
                />
              ) : (
                <div className="from-primary to-secondary flex flex-col items-center justify-center bg-gradient-to-tl"></div>
              )}
            </div>
          </a>
        </NextLink>
      </div>
      <div className="post-card-content relative flex h-full w-full flex-col p-6">
        <div className="post-card-meta mb-4 text-xs font-semibold leading-tight">
          {props.post.authors.length > 0 && (
            <span>By: {getAuthors(props.post)}</span>
          )}
          <div className="post-card-link -ml-4 inline-flex px-4 text-base font-medium">
            <NextLink href={postUrl(props.post.slug)}>
              <a>
                <h2 className="post-card-heading mb-auto text-lg font-bold leading-tight">
                  {props.post.title}
                </h2>
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};
