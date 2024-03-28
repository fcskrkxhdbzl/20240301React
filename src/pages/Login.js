import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

//import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  //상태값 초기
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  //오류 메세지 전달 초기 세팅
  const [idMsg, setIdMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  //유효성 검사 세팅
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  //버튼 활성화
  const [isActive, setIsActive] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;
    if (!idRegExp.test(currentId)) {
      setIdMsg("4-12사이 대소문자 또는 숫자만 입력해 주세요");
      setIsId(false);
    } else {
      setIdMsg("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMsg("숫자+영문자 조합으로 입력해주세요");
    } else {
      setPasswordMsg("안전한 비밀번호 입니다.");
    }
  };

  const handleIdInput = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.length >= 5 && password.length >= 5
      ? setIsActive(true)
      : setIsActive(false);
  };
  // const joinMember = () => {
  //   <Link to={`/joinmember`}></Link>;
  // };

  const loginTest = () => {
    navigate("/loginTest");
  };

  return (
    <div className="login">
      <div id="wrapper">
        <div id="logo">Ingstagram</div>
        <div id="input">
          <input
            id="id"
            type="text"
            value={id}
            onChange={onChangeId}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <p id="validId" className="message">
            {idMsg}
          </p>
          <input
            id="pw"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          ></input>
          <p id="validPw" className="message">
            {passwordMsg}
          </p>
        </div>
        <button
          className="loginBtn"
          id="loginBtn"
          style={{ basckgroudColor: isActive ? "#63b9e7" : "#0095f6" }}
          onClick={loginTest}
        >
          로그인
        </button>
        <div className="dotted-center">
          <div className="dotted-line">
            <div className="dotted-line-left"></div>
            <div className="dotted-line-or">또는</div>
            <div className="dotted-line-right"></div>
          </div>
        </div>
        <div id="miss">비밀번호를 잊으셨나요?</div>
        <div className="join-in">
          <div className="join-in-ask">계정이 없으신가요?</div>
          <Link to="/joinmember">
            <div className="join-in-id">가입하기</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
