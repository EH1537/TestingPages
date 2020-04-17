import React from 'react';
import ReactDOM from "react-dom";

const ModalPortal = (props) => {
  let renderModal
  // Render nothing if the "show" prop is false
  if (!props.modalDisplay) {
    document.getElementById("modal").style.height = "0%"
    document.getElementById("modal").style.opacity = "0%"
    renderModal = null;
  }

  else {
    let displayText = []
    let startingString = 0
    console.log(props.modalText[0].length)
    for (let i = 0; i < props.modalText.length; i++) {//  |?|
      console.log("helloin for loop")
      if (props.modalText[i] === "|" ) {
        console.log("yeet")
        displayText.push(props.modalText.slice(startingString, i))
        displayText.push(<br></br>)
        i += 2
        startingString = i + 1
      }
    } 
    console.log(displayText)

    document.getElementById("modal").style.height = "100%"
    document.getElementById("modal").style.opacity = "100%"
    renderModal = (

      <div className="backdrop">

        <div className="modalInner" id={props.id + "modal"}>
        </div>
        <div className="modalFooter">
          {displayText}

        </div>
                    <button onClick={() => props.onClose()}>
            Some Other text goes here
            Close
            </button>
      </div>
    );

  }


  return ReactDOM.createPortal(renderModal, document.querySelector("#modal"));
};

export default ModalPortal;