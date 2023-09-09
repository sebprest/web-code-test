import gql from "graphql-tag";

export const GET_BLOG_POSTS = gql`
  query {
    blogPostCollection(limit: 10, order: title_ASC) {
      items {
        sys {
          id
        }
        title
        preface
        body
      }
    }
  }
`;
