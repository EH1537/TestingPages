import * as types from '../constants/actionTypes';

const initialState = {
  display: false,
  modalDisplay: false,
}

const aReducer = (state = initialState, action) => {
  console.log(action)
  let copyState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.AN_ACTION: {

    }
    case types.SHOW_MAP: {
      console.log(copyState.display)
      let display = !copyState.display
      console.log(display)
      return {
        ...state,
        display,
      }
    }

    case types.SHOW_MODAL: {
      console.log(copyState.modalDisplay)
      let modalDisplay = !copyState.modalDisplay
      return {
        ...state,
        modalDisplay,
      }
    }

    default:
      return state;
  }
}


export default aReducer;