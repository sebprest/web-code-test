export type BlogPost = {
  sys: { id: string };
  title: string;
  preface: string;
  body: string;
};

export type BlogPostCollection = {
  blogPostCollection: {
    items: BlogPost[];
  };
};
