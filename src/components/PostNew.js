import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Layout, Carousel, Collapse } from "antd";
import "../styles/Post.css";
// import component
import PostUserInfo from "./PostUserInfo.js";
import PostInputImage from "./PostInputImage.js";

const writeInfoaxios = {
  writerProfile: "unknown",
  writer: "pupu",
  writeDate: "2024.03.16",
};
const collapses = (
  <input type="checkbox" id="collapseToggleBtn" className="collapseToggleBtn" />
);
// collapse panel style 설정
const collapseStyle = {
  margin: 0,
  padding: 0,
  background: "#fff",
};

const getItem = () => [
  {
    key: "1",
    label: "고급설정",
    children: <p>좋아요/조회수 숨기기{collapses}</p>,
    style: collapseStyle,
  },
];

const PostNew = () => {
  const param = useParams();
  console.log("현재상세페이지의 파라미터값  :", param);

  // 변수
  const { Header, Sider, Content } = Layout;
  const [upImgUrlList, setUpImgUrlList] = useState([]);
  const [newPostText, setNewPostText] = useState("");

  // 함수
  const imgArrChange = (curr) => {
    console.log(curr);
  };
  const fn_newPostText = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
  };
  return (
    <>
      <Flex className="flexStyle">
        <Layout className="layoutStyle">
          <Sider width="60%" className="siderStyle">
            <Carousel afterChange={imgArrChange}>
              {upImgUrlList.map((item, index) => (
                <div key={index}>
                  <img src={item} />
                </div>
              ))}
            </Carousel>
            <PostInputImage setUpImgUrlList={setUpImgUrlList} />
          </Sider>
          <Layout className="layoutStyle">
            <Header className="headerStyle">
              <PostUserInfo profile={writeInfoaxios} />
            </Header>
            <Content className="contentStyle3">
              <textarea
                onChange={fn_newPostText}
                placeholder="문구를 입력하세요"
              />
            </Content>
            {/* <Content className="contentStyle4">위치추가</Content> */}
            <Content className="contentStyle5">
              <Collapse
                size="small"
                bordered={false}
                items={getItem()}
                // children style 설정
                className="el_collapse"
              />
            </Content>
            <button type="button" className="newPostSubmitBtn">
              공유하기
            </button>
            {/* ddddddddddddddddddddddddddddddddddddddddddddddddddddd    form데이터 보내기 디비로 */}
            {/* ddddddddddddddddddddddddddddddddddddddddddddddddddddd    친구검색기능추가 */}
          </Layout>
        </Layout>
      </Flex>
    </>
  );
};

export default PostNew;
