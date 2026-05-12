import {
  PostPage as Post,
  type PostPageProps,
} from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />;
}

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const recentPosts = sortedPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: recentPosts,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string };
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps;
