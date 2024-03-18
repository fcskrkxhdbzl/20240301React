import React from "react";
import logo from "../logo.svg";

const Home = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>새내기 최초 테스트 화면</p>
          <p>SEANEAGI</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </header>
      </div>
    </div>
  );
};

export default Home;
