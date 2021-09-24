import Link from "next/link";
import { useRouter } from "next/router";
import SingleBlog from "../../components/SingleBlog/SingleBlog";

async function getPosts() {
  const res = await fetch("https://api.nelta.de/articles").then((res) =>
    res.json()
  );
  return res;
}

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.id;
  const res = await fetch(`https://api.nelta.de/articles/${slug}`);
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

function Post({ posts }) {
  const categories = posts.categories.map((categorie) => {
    return categorie.category_name;
  });
  return (
    <div>
      <SingleBlog
        id={posts.id}
        title={posts.title}
        image={posts.featured_image.url}
        content={posts.content}
        published_at={posts.published_at}
        categories={categories}
      />
    </div>
  );
}

export default Post;
