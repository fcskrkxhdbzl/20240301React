import React, { useState } from "react";
//import Modal from "react-modal";
import { Button, Modal } from "antd";
//import "antd/dist/antd.css";

const FollowerModal = () => {
  const [open, setOpen] = useState(false);
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

export default FollowerModal;
