import * as types from '../constants/actionTypes';

const initialState = {
  display: 'tester',
}

const aReducer = (state = initialState, action) => {
  let display;
  switch (action.types) {
    case types.AN_ACTION: {
    }
    default:
      return state;
  }
}


export default aReducer;