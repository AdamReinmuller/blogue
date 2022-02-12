import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PostType, SimilarPostsType } from "../graphql";
import { useSimilarPostsLazyQuery } from "../graphql/generated";
import moment from "moment";

type PostWidgetProps = {
  children?: ReactNode;
  categories?: string[];
  slug?: PostType["slug"];
};

const PostWidget = ({ categories, slug }: PostWidgetProps) => {
  const [getSimilarPosts, { loading, error, data }] =
    useSimilarPostsLazyQuery();

  useEffect(() => {
    if (slug && categories) {
      getSimilarPosts({ variables: { categories, slug } });
    } else {
      getSimilarPosts();
    }
  }, [categories, slug, getSimilarPosts]);

  if (!data || loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error! {error}</p>;
  }

  const { similarPosts, posts } = data;
  const relevantPosts = similarPosts?.length ? similarPosts : posts;

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="text=xl mb-8 border-b pb-4 font-semibold">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <div className="flex flex-col gap-4">
        {relevantPosts?.map((post) => (
          <div className="flex w-full items-start" key={post.title}>
            <div className="flex flex-col justify-center gap-1">
              <div className="relative flex h-16 w-16 flex-none">
                <Image
                  layout="fill"
                  alt={post.title}
                  objectFit="cover"
                  src={post.featuredImage.url}
                  className="rounded-full"
                />
              </div>
              <div className="ml-4 flex-grow"></div>
              <p className="whitespace-nowrap text-center text-xs text-gray-500">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
            <div className="flex items-center justify-center pt-2 text-center transition duration-700 line-clamp-3 hover:-translate-y-1 hover:text-green-600">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
