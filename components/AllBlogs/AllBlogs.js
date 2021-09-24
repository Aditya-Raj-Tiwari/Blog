import Markdown from "react-remarkable";
import Button from "../UI/Button";
import classes from "./AllBlogs.module.scss";

function AllBlogs({ post }) {
  return (
    <div key={post.id} className={classes.container}>
      <img
        className={classes.image}
        src={`https://api.nelta.de${post.featured_image.url}`}
      />
      <div className={classes["content-inner"]}>
        <div className={classes["categorie-header"]}>
          {post.categories.map((categorie) => {
            return <span key={categorie._id}>{categorie.category_name}</span>;
          })}
        </div>
        <div className={classes.content}>
          <h1>{post.title}</h1>
          <div className={classes.content_para}>
            <Markdown source={post.content}></Markdown>
          </div>
          <Button id={post.id} />
        </div>
      </div>
    </div>
  );
}

export default AllBlogs;
