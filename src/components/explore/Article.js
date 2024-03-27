import { useState, useEffect } from "react";
import "./../../styles/Explore.css";
import DummyData from "./../../constants/explore/dummy_data.json";

// img src
import Heart from "./../../assets/explore/heart.png";
import Paperplane from "./../../assets/explore/paperplane.png";
import Comments from "./../../assets/explore/comments.png";
import Profile from "./../../assets/explore/default_profile.png";
import Sample from "./../../assets/explore/explore.JPG";
import More from "./../../assets/explore/more.png";
import Bookmark from "./../../assets/explore/bookmark.png";

const Comment = (props) => {
  const comment = props.comment;
  const profileId = comment.userId;
  const mainText = comment.commentContent;
  return (
    <div>
      {/* // <!--comment-->*/}
      <div id="listComment" className="list_comment">
        <p className="txt_comment">
          <span>
            <a href="#n" className="txt_id">
              {profileId}
            </a>
            <span>{mainText}</span>
          </span>
          <button id="delete" type="button">
            X
          </button>
        </p>
      </div>
    </div>
  );
};
const Article = (props) => {
  // const item = props.article;
  // const item = DummyData[0];
  // const mainText = item.main_text;
  // const commentList = item.comment_list.map((ele, idx, arr) => {
  //   return <Comment comment={ele} />;
  // });
  // const posterId = item.profile_id;
  // const likeNum = item.like_num;

  const posterId = props.article.userNo;
  const url = props.article.url;
  const likeNum = props.article.likeNum;
  const mainText = props.article.postContent;
  const commentList = props.article.commentList.map((ele, idx, arr) => {
    return <Comment comment={ele} />;
  });
  return (
    <div>
      {/* <!--FEED BOARD--> */}
      <div className="feed_board">
        {/* <!--FEED COMPONENT--> */}
        <article className="feed">
          {/* <!--top--> */}
          <div className="new_poster">
            <div className="poster_img">
              <img
                alt="follower profile image"
                className="round_img"
                src={Profile}
              />
            </div>
            <div className="poster_id">
              <a href="#n" className="txt_id">
                {posterId}
              </a>
            </div>
            {/* <!-- <button><i className="fas fa-ellipsis-h"></i>옵션 더보기</button> --> */}
            <button>
              <img src={More} className="fas"></img>
            </button>
          </div>

          {/* <!--content--> */}
          <section className="feed_imgs">
            <img className="contents_img" alt="바다사진" src={url} />
            <div className="interactions">
              <div className="my_emotion">
                {/* <!--위에서 cdn을 링크로 삽입해서 여기서 클래스명으로 가져오면 사용할 수 있다.--> */}
                <button type="button">
                  <img className="far" src={Heart} />
                </button>
                <button type="button">
                  <img className="far" src={Comments} />
                </button>
                <button type="button">
                  <img className="far" src={Paperplane} />
                </button>
              </div>
              <div className="pagnation"></div>
              <button type="button" className="bookmark">
                <img className="far" src={Bookmark} />
              </button>
            </div>
            <p>
              <a href="#n" className="like_user">
                <img
                  alt="like user image"
                  className="round_img"
                  src={Profile}
                />
                <span className="txt_id">강당당</span>
              </a>
              님
              <a href="#n" className="like_num txt_id">
                외 {likeNum}명
              </a>
              이 좋아합니다
            </p>
          </section>

          {/* // <!--feed text-->*/}
          <section className="feed_txt">
            <a href="#n" className="txt_id">
              코딩
            </a>
            <span>{mainText}</span>
            <a href="#n" className="more">
              더보기
            </a>
          </section>
          <div className="comments">
            {commentList}
            <form id="post" className="post_comment">
              <textarea
                id="newComment"
                type="in"
                placeholder="댓글 달기..."
              ></textarea>
              <button id="btnPost" type="submit">
                게시
              </button>
            </form>
          </div>
        </article>
      </div>
      {/* // <!--//FEED BOARD-->*/}
    </div>
  );
};

export default Article;
