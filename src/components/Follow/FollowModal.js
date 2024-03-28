import React, { useState } from "react";
//import Modal from "react-modal";
import { Button, Modal } from "antd";
//import "antd/dist/antd.css";

const FollowModal = () => {
  const [open, setOpen] = useState(false); //모달
  // const stysyty = {
  //   color: "red",
  // };
  return (
    <>
      <Button
        type="primary"
        className="custom-button"
        onClick={() => setOpen(true)}
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
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>

          <p>some contents...</p>
        </div>
      </Modal>
    </>
  );
};

export default FollowModal;
