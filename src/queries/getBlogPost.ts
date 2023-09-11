import { gql } from "@apollo/client";

const GET_BLOG_POST = gql`
  query ($id: String!) {
    blogPost(id: $id) {
      title
      body
    }
  }
`;

export default GET_BLOG_POST;
