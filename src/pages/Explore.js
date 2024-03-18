import "./../styles/Explore.css";

// img src
import Heart from "./../assets/explore/heart.png";
import Paperplane from "./../assets/explore/paperplane.png";
import Comments from "./../assets/explore/comments.png";
import Profile from "./../assets/explore/default_profile.png";
import Sample from "./../assets/explore/explore.JPG";
import More from "./../assets/explore/more.png";
import Bookmark from "./../assets/explore/bookmark.png";

const Explore = () => {
  return (
    <div className="explore">
      {/* <div className="explore-container">
        <div className="writer">cwbt_geunwon</div>
        <div className="uploaded">!!!!!!!!!!!!!!!!!!!!img!!!!!!!!!!!!!!!!</div>
        <div className="actions">heart / comments / link / bookmark</div>
        <div className="like">좋아요 50개</div>
        <div className="comments">cwbt_geunwon 아놔... 운전 똑바로 해!</div>
        <div className="created">2일 전</div>
        <div className="add-comments">댓글 달기</div>
      </div> */}

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
                Following ID
              </a>
            </div>
            {/* <!-- <button><i className="fas fa-ellipsis-h"></i>옵션 더보기</button> --> */}
            <button>
              <img src={More} className="fas"></img>
            </button>
          </div>

          {/* <!--content--> */}
          <section className="feed_imgs">
            <img alt="바다사진" src={Sample} />
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
                외 10명
              </a>
              이 좋아합니다
            </p>
          </section>

          {/* // <!--feed text-->*/}
          <section className="feed_txt">
            <a href="#n" className="txt_id">
              코딩
            </a>
            <span>
              {" "}
              <br /> 놀시간에 공부해라!!! 놀시간에 공부해라!!! 놀시간에
              공부해라!!! 놀시간에 공부해라!!! 놀시간에 공부해라!!! 놀시간에
              공부해라!!!
            </span>
            <a href="#n" className="more">
              더보기
            </a>
          </section>

          {/* // <!--comment-->*/}
          <div className="comments">
            <div id="listComment" className="list_comment">
              <p className="txt_comment">
                <span>
                  <a href="#n" className="txt_id">
                    skd0141
                  </a>
                  <span>놀러가고 싶다!</span>
                </span>
                <button id="delete" type="button">
                  X
                </button>
              </p>
            </div>
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

export default Explore;
