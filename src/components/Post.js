import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Layout, Carousel } from "antd";
import "../styles/Post.css";
// import component
import PostUserInfo from "./PostUserInfo.js";
import PostButton from "./PostButton.js";

// 변수
const { Header, Footer, Sider, Content } = Layout;
//// parameter에서 가져온 postid로 백단에서 받아올 정보들: 게시물작성유저정보/게시물내용/게시물사진/
const imgArr = ["red", "orange", "yellow", "green", "blue", "sodomy", "purple"];
const writeInfoaxios = {
  writerProfile: "unknown",
  writer: "pupu",
  writeContent: "푸딩푸딩푸딩푸딩푸딩푸딩마싯게따",
};
//// -- 댓글
//// ---- 게시물에 현재 로그인된 아이디가 좋아요 눌렀는지
//// ---- 게시물에 현재 로그인된 아이디가 킵     눌렀는지

// 함수
const imgArrChange = (curr) => {
  console.log(curr);
};

const Post = () => {
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
                    // style={imgStyle}
                  />
                </div>
              ))}
            </Carousel>
          </Sider>
          <Layout>
            <Header className="headerStyle">
              <PostUserInfo profile={writeInfoaxios} />
            </Header>
            <Content className="contentStyle">
              {writeInfoaxios.writeContent}
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
