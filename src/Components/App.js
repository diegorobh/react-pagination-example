import React, { useState, useEffect, useRef } from 'react';
import Posts from "./Posts";
import Pagination from "./Pagination";
import axios from "axios";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [containerListHeight, setContainerListHeight] = useState(400);
  const containerList = useRef(null)

  useEffect(()=>{
    getContainerSize()
    console.log(posts)
    if(posts.length == 0){
      fetchPosts()
    }
  },[containerListHeight]);

  //height of cells
  const heightOfListElement = 34

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  //change page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber);
  const next = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  };
  const prev = ()=> {
    if(currentPage >= 2){
      setCurrentPage(currentPage - 1)
    }
  };

  const fetchPosts = async()=>{
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
    console.log(res.data)
    setLoading(false);
  }

  const getPostsPerPage = ()=> {
    setContainerListHeight(containerList.current.offsetHeight);
    console.log(containerListHeight);
    let postsPerPage = Math.floor(containerListHeight / heightOfListElement);
    setPostsPerPage(postsPerPage);
    console.log(postsPerPage);
  }

  const getContainerSize = ()=>{
    containerList.current != null ? getPostsPerPage() : console.log("loading div")
  }

  return (
    <div className="full_height_container" ref={containerList}>
      <Posts loading={loading} posts={currentPosts} containerHeight={containerListHeight} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
        next = {next}
        prev = {prev}
       />
    </div>
  );
}

export default App;
