import React from 'react';
import ReactDOM from "react-dom";

const ModalPortal = (props) => {
  let renderModal
  // Render nothing if the "show" prop is false


  let displayText = []
  let startingString = 0
  console.log(props.modalText)
  for (let i = 0; i < props.modalText.length; i++) {//  |?|
    if (props.modalText[i] === "|") {
      console.log("yeep")
      displayText.push(props.modalText.slice(startingString, i))
      displayText.push(<br></br>)
      i += 1
      startingString = i
    }

    document.getElementById("modal").style.height = "100%"
    document.getElementById("modal").style.opacity = "100%"

    if (!props.modalDisplay) {

        document.getElementById("modal").style.opacity = "0%"

      setTimeout(() => {
        document.getElementById("modal").style.height = "0%"
        renderModal = null
      }, 900)
    }

    console.log("source",props.source)
    renderModal = (

      <div className="backdrop">

        <div className="modalInner" id={props.id + "modal"}>
          <img src = {props.source}></img>
        </div>
        <div className="modalFooter">
          {displayText}

        </div>
        <button onClick={() => props.onClose(0)}>
          Some Other text goes here
          Close
            </button>
      </div>
    );

  }
  return ReactDOM.createPortal(renderModal, document.querySelector("#modal"));
};

export default ModalPortal;