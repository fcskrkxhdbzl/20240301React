import React, { useState } from "react";
import logo from "./../logo.svg";
import { Modal } from "antd";
import "./../App.css";
// import component
import Post from "../components/Post";
import PostNew from "../components/PostNew";

const Home = () => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isPostNewOpen, setIsPostNewOpen] = useState(false);
  const [selPostIndex, setSelPostIndex] = useState(1); // 게시물id값 변수
  const postShow = () => {
    setIsPostOpen(true);
    // setSelPostIndex(num) ---> 게시물뿌리는 map문이 생기면 그 게시물id값 받아오기
  };
  const posHide = () => {
    setIsPostOpen(false);
  };
  const postNewShow = () => {
    setIsPostNewOpen(true);
  };
  const postNewHide = () => {
    setIsPostNewOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>새내기 최초 테스트 화면</p>
        <p>SEANEAGI</p>
        {/* map으로 수정 https://www.instagram.com/healing.cook/ https://www.instagram.com/p/C4x5qinS_qf/  */}
        <p onClick={postShow}>포스트상세보기테스트트트트</p>
        <Modal
          open={isPostOpen}
          title="게시물 상세보기"
          width={"90%"}
          footer={null}
          onCancel={posHide}
        >
          <Post
            currIndex={selPostIndex} // ---> 모달열리면 보여지는 컴포넌트에 게시물id값 등 정보 넘겨주기
          />
        </Modal>
        {/* //  end map   */}
        <p onClick={postNewShow}>새글작성</p>
        <Modal
          open={isPostNewOpen}
          title="새 게시물 작성"
          width={"90%"}
          footer={null}
          onCancel={postNewHide}
        >
          <PostNew />
        </Modal>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
};

export default Home;
