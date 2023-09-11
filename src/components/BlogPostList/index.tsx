import { BlogPost } from "types/BlogPost";
import Card from "components/Card";

import * as S from "./styles";

interface BlogPostListProps {
  posts: BlogPost[];
}

function BlogPostList(props: BlogPostListProps) {
  return (
    <S.Container>
      {props.posts.map((post, i) => {
        const isWide = i % 5 === 0;

        return (
          <Card
            key={post.sys.id}
            id={post.sys.id}
            title={post.title}
            description={post.preface}
            wide={isWide}
          />
        );
      })}
    </S.Container>
  );
}

export default BlogPostList;
