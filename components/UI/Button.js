import Link from "next/link";
import classes from "./Button.module.scss";

function Button({ id }) {
  return (
    <div className={classes.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="-40" y1="12" x2="19" y2="12"></line>
      </svg>
      <Link href="/post/[id]" as={`/post/${id}`}>
        <a key={id}>Weiter Lesen ...</a>
      </Link>
    </div>
  );
}

export default Button;
