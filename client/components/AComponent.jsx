import React, { useEffect } from 'react';
import ModalPortal from './ModalPortal'
const AComponent = (props) => {
  useEffect(() => {
    var container = document.getElementById("testerDisplay"),
      inner = document.getElementById("mapDisplay");

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        var e = event || window.event;
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

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function (event) {
      console.log("on")
      update(event);
    };

    var onMouseLeaveHandler = function () {
      inner.style = "";
      console.log("leave")
    };

    var onMouseMoveHandler = function (event) {
      console.log("moving")
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    var update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function (x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
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
    <div id="testerDisplay">
      <div id="mapDisplay">
        {/* {<img src="statics/mapDemoMedium.png"> </img>} */}
          
          </div>

      <button id='copyConfig' type='button' onClick={() => props.showModal()}>Do you have ANY idea how hard this is?</button>
        <ModalPortal 
          modalDisplay={props.modalDisplay}
          onClose={props.showModal}
        />
    </div>
  )
}

export default AComponent;