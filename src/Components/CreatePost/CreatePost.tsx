import React, { SetStateAction, Dispatch } from "react";
import commentIcon from "../../assets/images/post.png";
import "./createPost.styles.scss";

interface ICreatePost {
  setShowAuth: Dispatch<SetStateAction<boolean>>;
}

const CreatePost: React.FC<ICreatePost> = ({ setShowAuth }) => {
  return (
    <div className="create-post post" onClick={() => setShowAuth(true)}>
      <div className="white-text">
        Create post
      </div>
      <div className="flex">
        <div>
          <img className="br50" src={commentIcon} alt="icon" />
        </div>
        <div className="grey-text">How are you feeling today?</div>
      </div>
      <div className="btn-container">
        <button className="cta-btn">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
