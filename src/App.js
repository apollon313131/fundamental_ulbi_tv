import React, { useEffect } from "react";
import { useState } from "react";
import PostService from "./components/API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Loader from "./components/UI/button/Loader/Loader";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/button/MyModal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import getPagesCount, { getPagesArray } from "./components/utils/pages";
import "./styles/App.css";
import Pagination from "./components/UI/button/Pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  //   const [isPostsLoading, setIsPostsLoading] = useState(false);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  //   async function fetchPosts() {
  //     setIsPostsLoading(true);
  //     setIsPostsLoading(false);
  //   }

  //! получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя{" "}
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов JS"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
