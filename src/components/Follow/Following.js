import React, { useState, useEffect } from "react";
//import Modal from "react-modal";
import { Button, Modal, Spin } from "antd";
//import "antd/dist/antd.css";
import axiosConfig from "services/axiosConfig";

const Following = (props) => {
  // props 확인
  //console.log("props확인 ::: (userinfo)" + props.userinfo);

  const [isFollowing, setIsFollowing] = useState(false); // 팔로우 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 상태 관리
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
  const [message, setMessage] = useState(""); // 메시지 상태 관리

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터를 받아오는 함수
    const fetchData = async () => {
      try {
        const response = await axiosConfig.get("/following-state"); //
        setIsFollowing(response.data.isFollowing); // 서버에서 받아온 팔로우 상태 업데이트
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 데이터를 받아오는 함수 호출
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  // 팔로우 버튼 클릭 시
  //[팔로우 -> 팔로잉 전환]
  // 팔로우 상태를 업데이트하는 함수
  const updateFollowingState = async (action) => {
    console.log("----------------->" + action);
    let params = new URLSearchParams();
    params.append("action", action);
    params.append("followerUNo", 3);
    params.append("followUNo", 2);
    params.append("followNo", 5);

    setIsLoading(true);
    try {
      const response = await axiosConfig.post("following", params);
      alert("시작");
      if (response.data.modalOpen) {
        console.log("응답 메시지:", response.data.message);
        setMessage(response.data.message);
        setIsModalVisible(true);
      } else {
        setIsFollowing(action === "I");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // 팔로우 버튼 클릭 시
  const handleButtonClick = async () => {
    const action = isFollowing ? "D" : "I"; // 현재 팔로우 상태에 따라 액션 결정
    await updateFollowingState(action);
  };

  // 팔로잉 모달 OK 클릭 시
  const handleModalOk = () => {
    setIsModalVisible(false); // 모달 닫기
    updateFollowingState("D");
  };

  // 팔로잉모달 취소 클릭 시 모달 닫기
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  // 팔로잉 버튼 클릭 시 모달 열기
  const handleFollowingButtonClick = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="button-container">
      <Button
        className="custom-button"
        type="primary"
        onClick={isFollowing ? handleFollowingButtonClick : handleButtonClick}
        style={{
          backgroundColor: isFollowing ? "gray" : "blue",
          color: isFollowing ? "black" : "white",
        }}
        icon={isLoading && <Spin />}
        disabled={isLoading}
      >
        {!isLoading && (isFollowing ? "팔로잉" : "팔로우")}
      </Button>
      <Modal
        title={
          isFollowing
            ? "팔로우를 취소 하시겠습니까?"
            : "이미 팔로우한 사용자입니다"
        }
        centered
        // onOk={isFollowing ? handleModalCancel : undefined}
        open={isModalVisible}
        // open={isModalVisible && !isFollowing}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        confirmLoading={isLoading}
        width={400}
        //okButtonProps={{ style: { display: "none" } }} // OK 버튼을 숨깁니다.
        okButtonProps={{ style: { display: isFollowing ? "block" : "none" } }} // 팔로잉 상태일 때는 OK 버튼만 표시되도록 설정
      >
        {message && <p>{message}</p>}
      </Modal>
    </div>
  );
};
export default Following;
