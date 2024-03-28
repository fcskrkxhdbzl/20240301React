import React, { useState } from "react";
import "styles/Post.css";

import { FiSend } from "react-icons/fi";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import {
  MdOutlineCollectionsBookmark,
  MdCollectionsBookmark,
} from "react-icons/md";

const PostButton = () => {
  const [toggLike, setToggLike] = useState(false);
  const [toggCollec, setToggCollec] = useState(false);
  function f_toggLike() {
    setToggLike(!toggLike);
  }
  function f_toggShare() {
    console.log("내친구목록뜨자!");
  }
  function f_toggCollec() {
    setToggCollec(!toggCollec);
  }

  return (
    <div className="postFooterDiv">
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OtQqGnYufAINROTKX_JSC9wGSFGzEr7Muw&usqp=CAU" /> */}
      <div>
        <button onClick={f_toggLike}>
          {toggLike === false ? <FaRegHeart /> : <FaHeart />}
        </button>
        <button>
          <FaRegComment />
        </button>
        <button onClick={f_toggShare}>
          <FiSend />
        </button>
        <div onClick={f_toggCollec}>
          {toggCollec === false ? (
            <MdOutlineCollectionsBookmark />
          ) : (
            <MdCollectionsBookmark />
          )}
        </div>
      </div>
      <div>좋아요 00개</div>
      <div>08월 05일</div>
    </div>
  );
};

export default PostButton;
