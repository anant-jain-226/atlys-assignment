import React, { Dispatch, SetStateAction } from "react";
import commentIcon from "../../assets/images/comment.png";
import "./post.styles.scss";

interface IPostProps {
  data: {
    name: string;
    relativeTime: number;
    text: string;
    icon: string;
    profile_pic: string;
    comments: number;
  };
  setShowAuth: Dispatch<SetStateAction<boolean>>;
}

const Post: React.FC<IPostProps> = ({ data, setShowAuth }) => {
  return (
    <div className="user-post post" onClick={() => setShowAuth(true)}>
      <div className="flex">
        <div>
          <img className="br50" src={data.profile_pic} alt="icon" />
        </div>
        <div>
          <div>{data.name}</div>
          <div className="grey-light-text">
            {data.relativeTime}mins ago
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <img className="br50" src={data.icon} alt="icon" />
        </div>
        <div className="grey-text">
          {data.text}
        </div>
      </div>
      <div className="align-center">
        <img src={commentIcon} alt="icon" />
        <div>{data.comments} comments</div>
      </div>
    </div>
  );
};

export default Post;
