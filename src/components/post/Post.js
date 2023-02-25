import React, { useState } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import "../main/main.css";
import Card from "../card/Card";
function Post(props) {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
   
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    
  };

  return (
    <div className="cardContainer">
    <Card>
      <div className="upvotes">
        <span>
          <BiUpvote className="like" size="30px" onClick={handleLike} />
          <p> {likes} </p>
        </span>
        <span>
          <BiDownvote className="dislike" size="30px" onClick={handleDislike} />
          <p> {dislikes} </p>
        </span>
      </div>
      <div className="postContainer">
        <h3 className="title">{props.title}</h3>
        <img src={props.img} />
      </div>
    </Card>
    </div>
  );
}

export default Post;
