import React from 'react';
import ReactDOM from "react-dom";
import { CSSTransitionGroup } from 'react-transition-group'

const ModalPortal = (props) => {
  let renderModal
  // Render nothing if the "show" prop is false
  if (!props.modalDisplay) {
    document.getElementById("modal").style.height = "0%"
    document.getElementById("modal").style.opacity = "0%"
    renderModal = null;
  }

  else {
    document.getElementById("modal").style.height = "100%"
    document.getElementById("modal").style.opacity = "100%"
    renderModal = (

      <div className="backdrop">
        <div className="modalInner">
          How about some text
          sl;dakfmlsa;kdmfa
          sdf'lkasdnmf;lkasdnmfa.sdf';lkamsdf
          asd
          fasghj
          fgh
          jfg
          hj
          fgh
          <div className="footer">
            <button onClick={() => props.onClose()}>
              Some Other text goes here
              Close
            </button>
          </div>
        </div>
      </div>
    );

  }


  return ReactDOM.createPortal(renderModal, document.querySelector("#modal"));
};

export default ModalPortal;