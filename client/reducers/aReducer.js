import * as types from '../constants/actionTypes';

const initialState = {
  display: false,
  modalDisplay: false,
  modalNumber: 0,
  contentURL: ["filler", "statics/mapNice.png", "statics/MartialArts.jpg"],
  modalText:["filler",
  `I've always enjoyed improving things, especially as a surprise or a gift.|?|
  A friend was running a D&D game for her friends, she had been using this little scrawled paper map for over a year, adding to it, erasing it raw and frayed, and starting over.|?|
  I found some textured paper, a felt tip pen, and had 2 hours in an airport and an hour at Microsoft HQ, and decided to draw something that came out of the appendix of a cheesy adventure novel.|?|
  Her and her players loved it, I even got a thank you card!`,
  `Martial arts, specifically  TaeKwonDo, and HapKiDo, was a part of my life for nearly 20 years.  It's also the reason why I have the joints of someone twice my age.|?|
  I was always a better teacher and throwing dummy than a fighter.  I guess it pays to be average height and weight.|?|
  There was always a certain level of meditation and Zen when getting thrown around.|?|
  I taught people from straight beginner into TKD metalists and black belts of their own. Some even became teachers themselves.`]
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
      console.log(action.payload)
      console.log(copyState.modalDisplay)
      let modalDisplay = !copyState.modalDisplay
      let modalNumber = action.payload
      return {
        ...state,
        modalDisplay,
        modalNumber
      }
    }

    default:
      return state;
  }
}


export default aReducer;