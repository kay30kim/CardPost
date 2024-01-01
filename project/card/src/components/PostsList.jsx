import { useState, useEffect } from "react";
import Post from "./Post";
// import NewPost from "../routes/NewPost";
import classes from "./PostsList.module.css";
// import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
	  setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
//   let modalContent;

//   if (isPosting) {
//     modalContent = (
//       <Modal onClose={onStopPosting}>
//         <NewPost
//           onCancel={onStopPosting}
//           onAddPost={addPostHandler}
//           // onBodyChange={bodyChangeHandler}
//           // onAuthorChange={authorChangeHandler}
//         />
//       </Modal>
//     );
//   }

  return (
    <div>
      {/* {modalContent} */}
      {!isFetching && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
          {/* <Post author={enteredAuthor} body={currentVal} /> */}
          {/* <Post author="Manuel" body="Check out the full course!" /> */}
        </ul>
      )}
      {!isFetching && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </div>
  );
}

export default PostsList;
