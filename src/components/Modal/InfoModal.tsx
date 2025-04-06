import React, { useContext } from "react";
import { AppContext } from "../../Context";
import "./modal.css";

const InfoModal = (props) => {
  const contextData = useContext(AppContext);
  const { showModal, setShowModal,modalInfo } = contextData;
  const handleModal = () => {
    setShowModal(false);
  };
  return (
    <section id="modal">
      <div className="row container-fluid">
        <div className="col-md-12">
          <div className="info-modal-content">
          <h4>{modalInfo}</h4>
          {props?.userCreated?
          <button onClick={()=>props?.setSignUp(false)}>Login to Continue
          </button>:
          <button onClick={handleModal}>Ok</button>
          }
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoModal;
