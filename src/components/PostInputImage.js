import React, { useState, useEffect } from "react";
import "../styles/Post.css";

const PostInputImage = (props) => {
  //변수
  //const [selImgUrlList, setSelImgUrlList] = useState([]);
  const [selImgs, setSelImgs] = useState([]);
  const [fileName, setFileName] = useState([]);
  const propdata = props.setUpImgUrlList;
  useEffect(() => {}, [selImgs]);
  //함수
  const f_fileList = (e) => {
    console.log(e.target.files);
    setSelImgs(e.target.files);
    let tempData = [];
    let fileNameArr = [];
    //let tempData = [...selImgUrlList];
    for (let i = 0; i < selImgs.length; i++) {
      const item = URL.createObjectURL(selImgs[i]);
      tempData.push(item);
      fileNameArr.push(selImgs[i].name);
      console.log("for문안에서 실행횟수count");
    }
    console.log("for끝나고, selImgUrlList", tempData);
    propdata(tempData);
    setFileName(fileNameArr);
  };

  return (
    <div>
      <label for="upFile" style={{ border: "1px solid gray" }}>
        올릴 사진 선택
      </label>
      <input
        type="file"
        id="upFile"
        multiple
        // style={{ display: "none" }}
        onChange={f_fileList}
      ></input>
      <ul>
        {fileName.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* {selImgUrlList.map((item, index) => (
        <div key={index}>
          <img src={item} />
        </div>
      ))} */}
    </div>
  );
};

export default PostInputImage;
