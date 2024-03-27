import React, { useState } from "react";
//import Modal from "react-modal";
import { Button, Modal, Spin } from "antd";
//import "antd/dist/antd.css";

const Following = () => {
  const [isFollowing, setIsFollowing] = useState(false); // 팔로우 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 상태 관리
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  // 팔로우 버튼 클릭 시
  //[팔로우 -> 팔로잉 전환]
  const handleButtonClick = () => {
    setIsLoading(true); // 스핀 시작
    setTimeout(() => {
      setIsFollowing(true); // 팔로잉으로 변경
      setIsLoading(false); // 스핀 종료
    }, 1000); // 1초 후에 실행 (원하는 시간 설정 가능)
  };

  // 팔로잉 모달 OK 클릭 시
  //[팔로잉 -> 팔로우 전환]
  const handleModalOk = () => {
    setIsModalVisible(false); // 모달 닫기
    setIsLoading(true); // 스핀 시작
    setTimeout(() => {
      setIsFollowing(false); // 팔로우로 변경
      setIsLoading(false); // 스핀 종료
    }, 1000); // 1초 후에 실행 (원하는 시간 설정 가능)
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
        title="팔로우를 취소 하시겠습니까?"
        centered
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={400}
      >
        {/* 모달 내용 */}
      </Modal>
    </div>
  );
};
export default Following;
