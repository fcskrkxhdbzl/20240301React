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
  const postShow = () => {
    setIsPostOpen(true);
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
        <p onClick={postShow}>포스트상세보기테스트트트트</p>
        <Modal
          open={isPostOpen}
          title="게시물 상세보기"
          width={"90%"}
          footer={null}
          onCancel={posHide}
        >
          <Post />
        </Modal>
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
