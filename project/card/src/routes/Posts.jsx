import PostsList from "../components/PostsList";
// import MainHeader from "../components/MainHeader";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModalHandler() { -> MainHeader에서 사용하던거
  //   setModalIsVisible(true);
  // }
  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  return (
    <>
      <Outlet />
      <main>
        {/* <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/> */}
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
