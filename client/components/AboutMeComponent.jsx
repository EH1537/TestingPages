import React, { useEffect } from 'react';
const AboutMeComponent = (props) => {
  useEffect(() => {
    let container = document.getElementById(props.id+"TileDisplay");
    let inner = document.getElementById(props.id+"contentDisplay");

    // Mouse
    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    let counter = 0;
    let refreshRate = 10;
    let isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    let onMouseEnterHandler = function (event) {
      console.log("on"+props.id)
      update(event);
    };

    let onMouseLeaveHandler = function () {
      inner.style = "";
      console.log("leave" + props.id)
    };

    let onMouseMoveHandler = function (event) {
      console.log("moving"+props.id)
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    let update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    let updateTransformStyle = function (x,y) {
      let style = "rotateY(" + y*3 + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;

  }, [])



  return (

    <div id={props.id+"TileDisplay"} className = "tileDisplay">
      <div id={props.id+"contentDisplay"} className = "contentDisplay">
      </div>

      <button id='copyConfig' type='button' onClick={() => props.showModal(props.modalNumber)}>About Me</button>
      {/* <ModalPortal
        id={props.id}
        modalText={props.modalText}
        modalDisplay={props.modalDisplay}
        onClose={props.showModal}
      /> */}
    </div>
  )
}

export default AboutMeComponent;