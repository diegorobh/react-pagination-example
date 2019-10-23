import React, { useState, useEffect } from 'react';
import Posts from "./Posts";
import Pagination from "./Pagination";
import axios from "axios";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(()=>{
    fetchPosts()
  },[]);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber);

  const fetchPosts = async()=>{
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
    console.log(res.data)
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Posts loading={loading} posts={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </React.Fragment>
  );
}

export default App;
