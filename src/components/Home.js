import React from "react";
import "../App.css";
import Card from "./Card";
import posts from "../Data/posts";

function createCard(post) {
  return (
    <Card
      key={post.id}
      posturl={post.posturl}
      title={post.title}
      imgSource={post.imgSource}
      text={post.introtext}
      alt={post.alt}
    />
  );
}

function Home() {
  return <div>{posts.map(createCard)}</div>;
}

export default Home;
