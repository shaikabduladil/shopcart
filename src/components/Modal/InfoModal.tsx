import React, { useContext } from "react";
import { AppContext } from "../../Context";
import "./modal.css";

const InfoModal = () => {
  const contextData = useContext(AppContext);
  const { showModal, setShowModal } = contextData;
  const handleModal = () => {
    setShowModal(false);
  };
  return (
    <section id="modal">
      <div className="row container-fluid">
        <div className="col-md-12">
          <div className="info-modal-content">
          <h4>Please Enter Valid Credentials</h4>
          <button onClick={handleModal}>Ok</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoModal;
