import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Layout, Carousel, Modal } from "antd";
import "../styles/Post.css";
// import component
import PostUserInfo from "./PostUserInfo.js";
import PostButton from "./PostButton.js";
import PostComment from "./PostComment.js";

//// useParams()로 가져온 post/:id로 백단에서 받아올 정보들: 게시물작성유저정보/게시물내용/게시물사진/ (백)
const imgArr = ["red", "orange", "yellow", "green", "blue", "sodomy", "purple"];
const writeInfoaxios = {
  writerProfile: "unknown",
  writer: "pupu",
  writeContent:
    "푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩푸딩마싯게따",
  writeDate: "2024.03.16",
};
const commentInfoaxios = [
  {
    writernum: 3,
    writerProfile: "unknown2",
    writer: "consumer",
    writeContent: "바나나푸딩바나나푸딩바나나푸딩바나나푸딩",
    writeDate: "2024.03.18",
    fewDay: 0, // 작성일-now = 작성경과일 계산된 거 받아오기
    addlike: 0,
  },
  {
    writernum: 2,
    writerProfile: "unknown2",
    writer: "consumer2",
    writeContent: "딸기푸딩딸기푸딩딸기푸딩딸기푸딩",
    writeDate: "2024.03.18",
    fewDay: 0, // 작성일-now = 작성경과일 계산된 거 받아오기
    addlike: 0,
  },
];
//
//
//
//
//
//

const Post = () => {
  const param = useParams();
  console.log("현재상세페이지의 파라미터값  :", param);

  // 변수
  const { Header, Footer, Sider, Content } = Layout;

  // 함수
  const imgArrChange = (curr) => {
    console.log(curr);
  };
  return (
    <>
      <Flex className="flexStyle">
        <Layout className="layoutStyle">
          <Sider
            width="60%"
            //collapsible={true} // 왼쪽 오른쪽 분할 접기
            //reverseArrow={true}  // 화살표 방향 바꾸기
            className="siderStyle"
          >
            <Carousel afterChange={imgArrChange}>
              {imgArr.map((item, index) => (
                <div className="imgDiv">
                  <img
                    key={index}
                    src={require(`../assets/testColor/${item}.jpg`)}
                  />
                </div>
              ))}
            </Carousel>
          </Sider>
          <Layout>
            <Header className="headerStyle">
              <PostUserInfo profile={writeInfoaxios} />
            </Header>
            <Content className="contentStyle1">
              <PostUserInfo profile={writeInfoaxios} />
              {writeInfoaxios.writeContent}
            </Content>
            <Content className="contentStyle2">
              <PostComment profile={commentInfoaxios} />
            </Content>
            <Footer className="footerStyle">
              <PostButton />
            </Footer>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
};

export default Post;
