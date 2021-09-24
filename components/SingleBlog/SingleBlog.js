import Markdown from "react-remarkable";
import classes from "./SingleBlog.module.scss";

function SingleBlog(props) {
  const { title, id, categories, image, content, published_at } = props;
  const date = new Date(published_at);
  const humanreadableDate = date.toDateString();
  return (
    <div className={classes.wrapper}>
      <img src={`https://api.nelta.de${image}`} />
      <div className={classes.headers}>
        <div>
          {categories.map((item) => {
            return (
              <span className={classes.categorie_header} key={item}>
                {item}
              </span>
            );
          })}
        </div>
        <p className={classes.heroHeader}>{title}</p>
        <p>Published on {humanreadableDate}</p>
      </div>
      <div className={classes.container}>
        <div className={classes.content}>
          <Markdown source={content} />
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
