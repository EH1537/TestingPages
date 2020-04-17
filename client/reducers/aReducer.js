import * as types from '../constants/actionTypes';

const initialState = {
  display: false,
  modalDisplay: false,
  mapsURL: ["statics/mapNice.png"],
  modalText:[`I've always enjoyed improving things, especially as a surprise.|?|A friend was running a D&D game for her friends, she had been using this little scrawled paper map for over a year, adding to it, erasing it raw and frayed, and starting over.|?|I found some textured paper, a felt tip pen, and had 2 hours in an airport and an hour at Microsoft HQ, and decided to draw something that came out of the appendix of a cheesy adventure novel.|?|Her and her players loved it.`]
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