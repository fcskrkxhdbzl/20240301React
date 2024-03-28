import React from "react";
import "styles/Post.css";

// 작성자 사진, 작성자 이름
const PostUserInfo = (props) => {
  const profile = props.image;
  const profileName = props.profile.userId;
  return (
    <>
      <div className="postHeaderDiv">
        <img src={require(`../assets/postImg/${profile}.jpg`)} />
        <span>{profileName !== "" ? profileName : "로그인이필요합니다"}</span>
      </div>
    </>
  );
};

export default PostUserInfo;
