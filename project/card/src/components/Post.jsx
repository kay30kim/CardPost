import classes from "./Post.module.css";

const names = ["Maximilian", "Manuel"];

function Post(props) {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
    // <div className={classes.post}>
    // 	<p>{chosenName} is awesome!</p>
    // 	<p>{props.author} and {props.body}</p>
    // </div>
  );
}

export default Post;
