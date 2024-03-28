import React, { useState } from "react";
import { Flex, Modal } from "antd";
import "App.css";
// import component
import Post from "components/Post";

const baseStyle = {
  width: "33%",
  height: 200,
};

const PostUserPersonal = () => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [selPostIndex, setSelPostIndex] = useState(1); // 게시물id값 변수
  const [value, setValue] = React.useState("horizontal");

  const postShow = () => {
    setIsPostOpen(true);
    // setSelPostIndex(num) ---> 게시물뿌리는 map문이 생기면 그 게시물id값 받아오기
  };
  const posHide = () => {
    setIsPostOpen(false);
  };

  return (
    <Flex gap="middle" horizontal>
      {Array.from({
        length: 3,
      }).map((_, i) => (
        <div
          key={i}
          style={{
            ...baseStyle,
            backgroundColor: i % 2 ? "#6baacf" : "#6bfacf",
          }}
          onClick={postShow}
        />
      ))}
      <Modal
        open={isPostOpen}
        title="게시물 상세보기"
        width={"90%"}
        footer={null}
        onCancel={posHide}
      >
        <Post
          currIndex={selPostIndex} // ---> 모달열리면 보여지는 컴포넌트에 게시물id값 등 정보 넘겨주기
        />
      </Modal>
    </Flex>
  );
};

export default PostUserPersonal;
