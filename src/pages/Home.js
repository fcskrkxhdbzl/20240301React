import logo from "./../logo.svg";
import "./../App.css";
import React, { useState } from "react";
import FollowerModal from "../components/Follow/FollowerModal";
import FollowModal from "../components/Follow/FollowModal";
import Following from "../components/Follow/Following";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>새내기 최초 테스트 화면</p>
        <FollowerModal open={open} closeModal={setOpen} />
        <FollowModal open={open} closeModal={setOpen} />
        <Following open={open} closeModal={setOpen} />
        <p>SEANEAGI</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.open("https://reactjs.org", "_blank")}
        >
          React 공식 웹사이트로 이동하기
        </a>
      </header>
    </div>
  );
};

export default Home;
