import React, { useEffect, useState } from "react";
//import Modal from "react-modal";
import { Button, Modal } from "antd";
//import "antd/dist/antd.css";
import axiosConfig from "services/axiosConfig";

const FollowerModal = (props) => {
  const [mbrMngNo, setMbrMngNo] = useState("");
  const [follower, setFollower] = useState("");

  const [open, setOpen] = useState(false);

  // const [resultMap, setResultMap] = useState([]);
  // const num = "1";
  // console.log("😊props로 받아온 user_no값 확인", num);

  // useEffect(() => {
  //   console.log("😂useEffect - num (" + num + ")");
  //   followerList();
  // }, [num]);

  useEffect(() => {
    console.log("😂useEffect - follow 상태값 업데이트 (" + follower + ")");
  }, [follower]);

  const followerList = async () => {
    console.log("회원관리번호 확인 ::: " + mbrMngNo + "," + props.userinfo);
    console.log("followerList start");
    let params = new URLSearchParams();
    params.append("followerNo", 2);

    console.log("followerList params : " + params);

    await axiosConfig

      .post("followerlist", params)
      .then((res) => {
        console.log("❤서버호출함?");
        console.log("followerList start");
        alert("시작");
        if (res.data.rst === "SUCCESS") {
          setFollower(res.data.list);
          setOpen(true);
        } else if (res.data.rst === "SUCCESS") {
          alert("조회 실패");
        }

        //setResultMap(res.data.resultMap);
        //setResultMap(res.data.resultMap[0].user_id);
      })
      .catch((err) => {
        console.log("followerList catch start");
        alert(err.message);
      });
  };

  return (
    <>
      <Button type="primary" className="custom-button" onClick={followerList}>
        팔로워
      </Button>
      <Modal
        className="modalcontrol"
        title="팔로워"
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
          {follower &&
            follower.map((item, idx) => {
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

export default FollowerModal;
