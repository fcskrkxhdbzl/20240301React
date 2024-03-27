import React, { useState, useEffect } from "react";
import "../styles/Post.css";
import PostUserInfo from "./PostUserInfo";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const PostComment = (props) => {
  console.log(props);
  //const [like, setLike] = useState([props.profile]);
  // useEffect(() => {}, [like]);
  // const f_addLike = (e, num) => {
  //   console.log(num);
  //   console.log(like);
  //   const copyLike = like;
  //   // axios통신으로 addlike 수정 절 추가 (백)
  //   copyLike[0].filter((item) => {
  //     if (item.writernum === num) {
  //       if (item.addlike !== 1) {
  //         item.addlike = 1;
  //       } else {
  //         item.addlike = 0;
  //       }
  //     }
  //   });
  //   setLike({ ...like, copyLike });
  //   console.log("최종확인하는 liike객체임둥", like);
  // };
  // const f_addComm = (e, num) => {
  //   console.log("댓글추가로직");
  // };

  // return (
  //   <>
  //     {
  //     props.profile.map((item, index) => (
  //       <div className="postContent2Div" key={item.comment_no}>
  //         <div>
  //           {/* 댓글작성자이미지+작성자, 댓글경과일 */}
  //           <PostUserInfo profile={props.profile[index]} image={props.image} />
  //           {/* <span>{item.fewDay}일전</span> */}
  //           <span>11일전</span>
  //           <br />
  //           {/* 댓글내용 */}
  //           <span>{item.comment_content}</span>
  //           <br />
  //           {/* 댓글좋아요갯수, 대댓글달기 */}
  //           <span>
  //             좋아요 00개{" "}
  //             <button
  //               // onClick={(e) => {
  //               //   f_addComm(e, item.writernum);
  //               // }}
  //               className="recommBtn"
  //             >
  //               답글 달기
  //             </button>
  //           </span>
  //           <br />
  //           {/* 대댓글펼쳐보기 */}
  //           <p>--- 답글 00개 더 보기</p>
  //         </div>
  //         <div>
  //           {/* 댓글좋아요누르기 */}
  //           <button
  //             // onClick={(e) => {
  //             //   f_addLike(e, item.writernum);
  //             // }}
  //             className="likeCommBtn"
  //           >
  //             {/* {item.addlike === 1 ? <FaHeart /> : <FaRegHeart />} */}
  //           </button>
  //         </div>
  //       </div>
  //     ))
  //     }
  //   </>
  // );
};

export default PostComment;
