import React, { useState, useEffect, useRef } from "react";
import "../styles/Post.css";
import PostUserInfo from "./PostUserInfo";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axiosConfig from "../services/axiosConfig";

const PostComment = (props) => {
  console.log(props.profile.comments);
  const commentList = props.profile.comments;
  const postId = props.currIndex;
  // 변수
  // 함수
  // const f_addComm = (e, num) => {
  //   console.log("댓글추가로직");
  // };
  const f_addLike = async (e, num, like) => {
    console.log("여기다가백받기", num);
    const param = new FormData();
    param.append("userNo", 1);
    param.append("commentNo", num);
    param.append("postNo", postId);
    const paramUn = new FormData();
    paramUn.append("commentNo", num);
    paramUn.append("postNo", postId);
    if (like === 0) {
      await axiosConfig
        .post("commentLike", param)
        .then((res) => {
          console.log("comment Like data::::::", res.data);
          props.setCommentInfoAxios(res.data);
        })
        .catch((error) => {
          console.log(error.config);
        });
    } else {
      await axiosConfig
        .post("commentUnLike", paramUn)
        .then((res) => {
          console.log("comment Like data::::::", res.data);
          props.setCommentInfoAxios(res.data);
        })
        .catch((error) => {
          console.log(error.config);
        });
    }
  };
  return (
    <>
      {commentList &&
        commentList.map((item, index) => (
          <div className="postContent2Div" key={item.commentNo}>
            <div>
              {/* 댓글작성자이미지+작성자, 댓글경과일 */}
              <PostUserInfo profile={commentList[index]} image={props.image} />
              {/* <span>{item.fewDay}일전</span> */}
              <span>11일전</span>
              <br />
              {/* 댓글내용 */}
              <span>{item.commentContent}</span>
              <br />
              {/* 댓글좋아요갯수, 대댓글달기 */}
              <span>
                좋아요 00개{" "}
                <button
                  // onClick={(e) => {
                  //   f_addComm(e, item.writernum);
                  // }}
                  className="recommBtn"
                >
                  답글 달기
                </button>
              </span>
              <br />
              {/* 대댓글펼쳐보기 */}
              <p>--- 답글 00개 더 보기</p>
            </div>
            <div>
              {/* 댓글좋아요누르기 */}
              <button
                onClick={(e) => {
                  f_addLike(e, item.commentNo, item.addlike);
                }}
                className="likeCommBtn"
              >
                {item.addlike === 1 ? <FaHeart /> : <FaRegHeart />}
                {/* <FaRegHeart /> */}
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostComment;
