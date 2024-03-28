import React, { useState, useEffect, useRef } from "react";
import "styles/Post.css";

const PostInputImage = (props) => {
  //변수
  const [selImgs, setSelImgs] = useState([]);
  const [fileName, setFileName] = useState([]);
  const propdata = props.setUpImgUrlList;

  // 함수(f_fileList) + useEffect
  const f_fileList = (e) => {
    setSelImgs(e.target.files); //FileList라는 객체 담기
  };
  useEffect(() => {
    let tempData = [];
    let fileNameArr = [];
    for (let i = 0; i < selImgs.length; i++) {
      console.log("유즈이펙트당");
      const item = URL.createObjectURL(selImgs[i]);
      tempData.push(item);
      fileNameArr.push(selImgs[i].name);
    }
    setFileName(fileNameArr);
    propdata(tempData);
  }, [selImgs]);

  return (
    <div>
      <label for="upFile" style={{ border: "1px solid gray" }}>
        올릴 사진 선택
      </label>
      <input
        type="file"
        id="upFile"
        multiple
        style={{ display: "none" }}
        onChange={f_fileList}
      ></input>
      <ul>
        {fileName.map((item, index) => (
          <li key={index}>::::{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostInputImage;
