import React from "react";
import './App.css';
import Card from "./Card";
import posts from "./Data/posts";

function createCard(post){
  return (
  <Card
  key={post.id}
   title={post.title}
  img={post.imgURL}
  text={post.text} 
  />
  );
}

function Home() {
  return (
    <div>
{posts.map(createCard)}
    </div>
  );
}

export default Home;
