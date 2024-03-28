import React, { useState, useEffect } from "react";
import axiosConfig from "../services/axiosConfig";

const PostSearchPeople = () => {
  // 변수
  const [find, setFind] = useState({ userName: "" }); // 새글작성에 친구추가를 위한 검색어에는 name으로 한정
  const { userName } = find; // 객체에서 키값 꺼내기
  const [result, setResult] = useState([]); // 검색조건에 맞는 친구 리스트 담기
  const [showResult, setShowResult] = useState(false); // 친구 리스트가 not null 일때만 보여주기

  // result객체에 useEffect 적용
  useEffect(() => {
    if (result !== null) {
      setShowResult(!showResult);
    }
  }, [result]);

  // 함수
  const inputChange = (e) => {
    const { name, value } = e.target;
    setFind({ ...find, [name]: value });
  };
  const inputSearch = () => {
    console.log(userName);
    axiosConfig
      .get("searchUser")
      .then((res) => {
        console.log(res.data);
        setResult(res.data.resultMap); // 백에서 리턴해준 데이터가 resultMap
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <input
        type="text"
        name="userName"
        onChange={inputChange}
        placeholder="함께한친구의 이름을 검색해주세요"
      ></input>
      {/* onClick={inputSearch(userName)}  --->  클릭이 아닌 find객체가 변경될때마다 발생(재렌더링?) */}
      <button type="button" onClick={inputSearch}>
        검색
      </button>
      {showResult ? (
        <>{result !== null ? <p>{result.userName}</p> : null}</>
      ) : null}
    </>
  );
};

export default PostSearchPeople;
