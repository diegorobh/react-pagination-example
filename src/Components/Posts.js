import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const Posts = ( { posts, loading } )=>{

  const renderLoading = ()=>{
    return(
      <div>Loading...</div>
    )
  };

  const renderList =()=>{
    return(
      <List>
        {posts.map(post => (
          <React.Fragment>
            <ListItem key={post.id}>{post.title}</ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    )
  }

  return loading ? renderLoading() : renderList()

}

export default Posts;
