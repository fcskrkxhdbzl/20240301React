import React from "react";
import "../styles/Post.css";

// 작성자 사진, 작성자 이름
const PostUserInfo = (props) => {
  const profile = props.profile.writerProfile;
  const profileName = props.profile.writer;
  return (
    <>
      <div className="postHeaderDiv">
        <div>
          <img src={require(`../assets/${profile}.jpg`)} />
        </div>
        <div>
          <span>{profileName}</span>
        </div>
      </div>
    </>
  );
};

export default PostUserInfo;
