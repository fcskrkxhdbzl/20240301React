import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Layout, Carousel, Modal } from "antd";
import "../styles/Post.css";
// import component
import PostUserInfo from "./PostUserInfo.js";
import PostButton from "./PostButton.js";
import PostComment from "./PostComment.js";
import axiosConfig from "services/axiosConfig";

//// props로 받은 게시물id로 백단에서 받아올 정보들: 게시물작성유저정보/게시물내용/게시물사진/ (백)
const imgArr = ["red", "orange", "yellow", "green", "blue", "sodomy", "purple"];

// const commentInfoaxios = [
//   {
//     writernum: 3,
//     image: "circle_1",
//     writer: "consumer",
//     writeContent: "바나나푸딩바나나푸딩바나나푸딩바나나푸딩",
//     writeDate: "2024.03.18",
//     fewDay: 0, // 작성일-now = 작성경과일 계산된 거 받아오기
//     addlike: 0,
//   },
//   {
//     writernum: 2,
//     image: "circle_1",
//     writer: "consumer2",
//     writeContent: "딸기푸딩딸기푸딩딸기푸딩딸기푸딩",
//     writeDate: "2024.03.18",
//     fewDay: 0, // 작성일-now = 작성경과일 계산된 거 받아오기
//     addlike: 0,
//   },
// ];

//
//
//
//
//
//

// home.js에서 props (props.currIndex) 받기
const Post = (props) => {
  const postId = props.currIndex;

  // 변수
  const { Header, Footer, Sider, Content } = Layout;
  const [writeInfoAxios, setWriteInfoAxios] = useState({
    post: { post_content: "", user_id: "" },
    diffDate: 0,
  });
  const [commentInfoAxios, setCommentInfoAxios] = useState([]);
  const [dayShow, setDayShow] = useState();
  const [image, setImage] = useState(["man", "circle_1"]);

  // 모든 렌더링이 완료된 후, 첫번째인자(콜백함수)실행->무한렌더링방지를위해 []전달해서 최초1회 실행
  // 아니면 postdetail을 여는 버튼에 axios 걸기
  useEffect(() => {
    postDetailAxios();
    commentAxios();
  }, []);
  const postDetailAxios = async () => {
    const param = new FormData();
    param.append("postNo", postId);
    await axiosConfig
      .post("postDetail", param)
      .then((res) => {
        console.log(res.data);
        setWriteInfoAxios(res.data);
      })
      .catch((error) => {
        console.log("error탐", error);
      });
  };
  const commentAxios = async () => {
    const param = new FormData();
    param.append("postNo", postId);
    await axiosConfig
      .post("commentList", param)
      .then((res) => {
        console.log("commentresdasta::::::", res.data);
        setCommentInfoAxios(res.data);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  useEffect(() => {
    const diff = Math.abs(writeInfoAxios.diffDate);
    switch (diff !== "") {
      case diff < 60:
        console.log("초전이다");
        return setDayShow(diff + "초전");
      case diff >= 60 && diff < 3600:
        console.log(diff + "분전이다");
        return setDayShow(Math.round(diff / 60, 0) + "분전");
      case 3600 <= diff:
        console.log("시전이다");
        return setDayShow(Math.round(diff / 3600, 0) + "시간전");
      default:
        return console.log("else다 diff값 이상하당 ''인가봐!");
    }
  }, [writeInfoAxios]);

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
              <PostUserInfo
                profile={writeInfoAxios && writeInfoAxios.post}
                image={image[0]}
              />
              {dayShow}
            </Header>
            <Content className="contentStyle1">
              <PostUserInfo
                profile={writeInfoAxios && writeInfoAxios.post}
                image={image[0]}
              />
              {writeInfoAxios && writeInfoAxios.post.postContent}
            </Content>
            <Content className="contentStyle2">
              <PostComment
                profile={commentInfoAxios}
                image={image[1]}
                setCommentInfoAxios={setCommentInfoAxios}
                currIndex={postId}
              />
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
