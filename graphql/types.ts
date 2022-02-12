import { PostsQuery, SimilarPostsQuery } from "./generated";

export type PostsType = PostsQuery["posts"];

export type PostType = PostsQuery["posts"][0];

export type SimilarPostsType = SimilarPostsQuery["posts"];

export type SimilarPostType = SimilarPostsQuery["posts"][0];
