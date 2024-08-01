import { Backdrop, Typography } from "@mui/material";
import React, { useState } from "react";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Post from "../../Components/Post/Post";
import waveIcon from "../../assets/images/wave.png";
import emoji from "../../assets/images/sad_emoji.png";
import person1 from "../../assets/images/person_1.png";
import person2 from "../../assets/images/person_2.png";
import "./home.styles.scss";
import Login from "../../Components/Login/Login";

export default function Home() {
  const username = "Jane";
  const [showAuth, setShowAuth] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [posts, setPosts] = useState([
    {
      name: "Theresa Webb",
      relativeTime: 5,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      icon: waveIcon,
      profile_pic: person1,
      comments: 24,
    },
    {
      name: "Marvin McKinney",
      relativeTime: 8,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      icon: emoji,
      profile_pic: person2,
      comments: 24,
    },
  ]);

  return (
    <div>
      <div className="feed-container">
        {showAuth && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <Login isLoginVisible={showLogin} setShowAuth={setShowAuth} />
          </Backdrop>
        )}
        <Typography>Hello {username}</Typography>
        <Typography className="grey-text">
          How are you doing today? Would you like to share something with the
          community 🤗
        </Typography>
        <CreatePost setShowAuth={setShowAuth} />
        {posts.map((item) => {
          return <Post data={item} setShowAuth={setShowAuth} />;
        })}
      </div>
    </div>
  );
}
