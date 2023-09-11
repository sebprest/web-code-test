import { useQuery } from "@apollo/client";
import MainContainer from "components/Layout";
import { useRouter } from "next/router";
import GET_BLOG_POST from "queries/getBlogPost";
import { BlogPost } from "types/BlogPost";

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useQuery<{ blogPost: BlogPost }, { id: string }>(
    GET_BLOG_POST,
    {
      variables: { id: typeof id === "string" ? id : id[0] },
    },
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <h1>{data.blogPost.title}</h1>
      <p>{data.blogPost.body}</p>
    </MainContainer>
  );
}

export default BlogPost;
