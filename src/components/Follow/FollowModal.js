import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
//import "antd/dist/antd.css";
import axiosConfig from "services/axiosConfig";

const FollowModal = (props) => {
  /**  ******************************************/
  // props 확인
  console.log("props확인 ::: (userinfo)" + props.userinfo);

  /**  ******************************************/
  // 변수선언
  const [open, setOpen] = useState(false); //모달
  const [mbrMngNo, setMbrMngNo] = useState("");
  const [follow, setFollow] = useState("");

  // const num = "1";
  // console.log("😊props로 받아온 user_no값 확인", num);

  // 회원관리번호 상태값 업데이트
  // 페이지 접속 시 바로 실행
  // useEffect(() => {
  //   console.log("useEffect START - props.userinfo (" + props.userinfo + ")");
  //   setMbrMngNo(props.userinfo);
  //   followList();
  // }, []);

  //props.userinfo 상태값 업데이트 시 실행
  // useEffect(() => {
  //   console.log("useEffect START - props.userinfo (" + props.userinfo + ")");
  //   setMbrMngNo(props.userinfo);
  //   followList();
  // }, [props.userinfo]);

  // useEffect(() => {
  //   console.log("😂useEffect - num (" + num + ")");
  //   followList();
  // }, [num]);

  useEffect(() => {
    console.log("😂useEffect - follow 상태값 업데이트 (" + follow + ")");
  }, [follow]);

  const followList = async () => {
    console.log("회원관리번호 확인 ::: " + mbrMngNo + "," + props.userinfo);
    console.log("followList start");
    let params = new URLSearchParams();
    params.append("followNo", 2);

    console.log("followList params : " + params);

    await axiosConfig
      .post("followlist", params)
      .then((res) => {
        console.log("followList start");
        alert("시작");
        if (res.data.rst === "SUCCESS") {
          setFollow(res.data.list);
        } else if (res.data.rst === "SUCCESS") {
          alert("조회 실패");
        }

        setOpen(true);
      })
      .catch((err) => {
        console.log("followList catch start");
        alert(err.message);
      });
  };
  /**  ******************************************/
  return (
    <>
      <Button
        type="primary"
        className="custom-button"
        //onClick={() => setOpen(true)}
        onClick={followList}
      >
        팔로우
      </Button>
      <Modal
        className="modalcontrol"
        title="팔로우"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={400}
        //style={stysyty}
      >
        <div
          //  className="modal-scroll"
          style={{ height: "300px", overflowY: "auto" }}
        >
          {follow &&
            follow.map((item, idx) => {
              return (
                <>
                  <p key={idx}>{item.user_id}</p>
                </>
              );
            })}
        </div>
      </Modal>
    </>
  );
};

export default FollowModal;
