import { useQuery } from "@apollo/client";
import Head from "next/head";
import BlogTitle from "components/PageHeading";
import MainContainer from "components/Layout";
import BlogPostList from "components/BlogPostList";
import { GET_BLOG_POSTS } from "queries/getBlogPosts";
import { BlogPostCollection } from "types/BlogPost";

export default function BlogListingPage() {
  const { loading, data, error } = useQuery<BlogPostCollection>(GET_BLOG_POSTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <MainContainer>
      <Head>
        <title>From the blog</title>
      </Head>
      <BlogTitle>From the blog</BlogTitle>
      <BlogPostList posts={data?.blogPostCollection.items} />
    </MainContainer>
  );
}
