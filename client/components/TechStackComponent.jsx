import React, { useEffect } from 'react';
const TechStackComponent = (props) => {

  return (
    <div >
      <button id='copyConfig' type='button' onClick={() => props.showModal(props.modalNumber)}>My Tech Stack</button>
    </div>
  )
}

export default TechStackComponent;