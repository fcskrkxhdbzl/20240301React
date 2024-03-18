import React from "react";
import { Flex, Layout, Carousel } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};
const imgStyle = {
  width: "10%",
  height: "10%",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};
const flexStyle = {
  marginTop: "5%",
  marginBottom: "5%",
  marginLeft: "10%",
  marginRight: "10%",
  height: "80vh",
};

// 변수
const imgArr = ["red", "orange", "yellow", "green", "blue", "sodomy", "purple"];
// 함수
const imgArrChange = (curr) => {
  console.log(curr);
};

const Post = () => {
  return (
    <>
      <Flex style={flexStyle}>
        <Layout style={layoutStyle}>
          <Sider
            width="60%"
            //collapsible={true} // 왼쪽 오른쪽 분할 접기
            //reverseArrow={true}  // 화살표 방향 바꾸기
            style={siderStyle}
          >
            <Carousel afterChange={imgArrChange}>
              {imgArr.map((item, index) => (
                <div>
                  <img
                    key={index}
                    src={require(`../assets/${item}.jpg`)}
                    style={imgStyle}
                  />
                </div>
              ))}
            </Carousel>
          </Sider>
          <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
};

export default Post;
