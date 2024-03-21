import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Layout, Carousel, FloatButton } from "antd";
import "../styles/Post.css";
// import component
import PostUserInfo from "./PostUserInfo.js";
import PostInputImage from "./PostInputImage.js";

const writeInfoaxios = {
  writerProfile: "unknown",
  writer: "pupu",
  writeDate: "2024.03.16",
};

const PostNew = () => {
  const param = useParams();
  console.log("현재상세페이지의 파라미터값  :", param);

  // 변수
  const { Header, Sider, Content } = Layout;
  const [upImgUrlList, setUpImgUrlList] = useState([]);
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
              {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!여기하는중!!!!!!!!!!!!!!자식한테input파일리스트url로 변환된거 받아와야함!!! */}
              {upImgUrlList.map((item, index) => (
                <div key={index}>
                  <img src={item} />
                </div>
              ))}
            </Carousel>
            <PostInputImage setUpImgUrlList={setUpImgUrlList} />
          </Sider>
          <Layout>
            <Header className="headerStyle">
              <PostUserInfo profile={writeInfoaxios} />
            </Header>
            <Content className="contentStyle3">
              <textarea placeholder="문구를 입력하세요..." />
            </Content>
            <Content className="contentStyle4">위치추가</Content>
            <Content className="contentStyle5">
              좋아요수숨기기토글버튼 / 댓글기능해제토글버튼
            </Content>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
};

export default PostNew;
