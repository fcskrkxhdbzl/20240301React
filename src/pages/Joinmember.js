import React, { useState } from "react";
import "./joinmember.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Joinmember = () => {
  const navigate = useNavigate();
  const login = () => {
    <Link to={`/login`}></Link>;
  };
  //상태값 초기
  const [id, setId] = useState("");
  const [firstNm, setFirstNm] = useState("");
  const [lastNm, setLastNm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  //오류 메세지 전달 초기 세팅
  const [idMsg, setIdMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [firstNmMsg, setFirstNmMsg] = useState("");
  const [lastNmMsg, setLastNmMsg] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");
  //유효성 검사 세팅
  const [isId, setIsId] = useState(false);
  const [isFirstNm, setIsFirstNm] = useState(false);
  const [isLastNm, setIsLastNm] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMsg("4-12글자 사이 대소문자 또는 숫자만 입력해 주세요");
      setIsId(false);
    } else {
      setIdMsg("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  // const onChangeFirstNm = (e) => {
  //   const currentFirstNm = e.target.value;
  //   setFirstNm(currentFirstNm);
  //   const firstNmRegExp = /^[a-zA-z0-9]{4,12}$/;

  //   if (currentFirstNm < 3) {
  //     setFirstNmMsg("이름을 입력해 주세요.");
  //     setIsFirstNm(false);
  //   } else {
  //     setFirstNmMsg("사용가능한 이름 입니다.");
  //     setIsFirstNm(true);
  //   }

  //   // if (!firstNmRegExp.test(currentFirstNm)) {
  //   //   setFirstNmMsg("이름을 입력해 주세요.");
  //   //   setIsFirstNm(false);
  //   // } else {
  //   //   setFirstNmMsg("사용가능한 이름 입니다.");
  //   //   setIsFirstNm(true);
  //   // }
  // };

  // const onChangeLastNm = (e) => {
  //   const currentLastNm = e.target.value;
  //   setLastNm(currentLastNm);
  //   const lastNmRegExp = /^[a-zA-z0-9]{4,12}$/;

  //   if (!lastNmRegExp.test(currentLastNm)) {
  //     setLastNmMsg("4-12사이 대소문자 또는 숫자만 입력해 주세요");
  //     setIsLastNm(false);
  //   } else {
  //     setLastNmMsg("사용가능한 성명 입니다.");
  //     setIsLastNm(true);
  //   }
  // };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMsg("숫자+영문자 조합으로 입력해주세요");
      setIsPassword(false);
    } else {
      setPasswordMsg("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      // setPasswordConfirmMsg("비밀번호가 다릅니다.");
      alert("비밀번호가 다릅니다.");
      setIsPasswordConfirm(false);
    } else {
      // setPasswordConfirmMsg("비밀번호가 동일합니다.");
      alert("비밀번호가 동일합니다.");
      setIsPasswordConfirm(true);
    }
  };

  const joinInsert = (e) => {
    e.preventDefault();

    console.log("joinInsert");

    let params = new FormData();
    params.append("Id", sessionStorage.getItem("Id"));
    params.append("Id", sessionStorage.getItem("Id"));
    params.append("Id", sessionStorage.getItem("Id"));

    axios
      .post("/system/joinInsert", params)
      .then((res) => {
        console.log("joinInsert res start");
        alert("등록성공");
      })
      .catch((err) => {
        console.log("joinInsert catch start");
        alert(err.message);
      });
  };

  return (
    <div className="joinmember">
      <div id="wrapper">
        <div id="logo">Ingstagram</div>
        <div id="sub">친구들의 사진과 동영상을 보려면 가입하세요.</div>
        <div id="input">
          <input
            id="id"
            type="text"
            value={id}
            onChange={onChangeId}
            placeholder="휴대폰 번호 또는 이메일 주소"
          ></input>
          <p id="validJoinId" className="message">
            {idMsg}
          </p>
          <input
            id="lnm"
            type="lastname"
            //value={lastNm}
            //onChange={onChangeLastNm}
            placeholder="성명"
            maxLength={2}
          ></input>
          <p id="validLastNm" className="message">
            {lastNmMsg}
          </p>
          <input
            id="fnm"
            type="firstname"
            //value={firstNm}
            //onChange={onChangeFirstNm}
            placeholder="사용자 이름"
            maxLength={3}
          ></input>
          <p id="validFirstNm" className="message">
            {firstNmMsg}
          </p>
          <input
            id="pw"
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          ></input>
          <p id="validJoinPw" className="message">
            {passwordMsg}
          </p>
        </div>
        <button id="joinBtn" onClick={joinInsert}>
          가입
        </button>
        <div className="joinMem-in">
          <div className="joinMem-in-ask">계정이 있신가요?</div>
          <Link to="/login">
            <div className="joinMem-in-id">로그인</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Joinmember;
