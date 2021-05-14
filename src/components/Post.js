import React from "react";
import posts from "../Data/posts";
import { useParams } from "react-router-dom";

function Post() {
  const urlparams = useParams();
  const post = find(urlparams.posturl);

  function find(posturl) {
    return posts.find((post) => post.posturl === posturl);
  }

  return (
    <div className="post">
      <img className="thumbnail" src={post.imgSource} alt={post.alt} />
      <h1>{post.title} </h1>
      <div>{post.fulltext}</div>
    </div>
  );
}

export default Post;
