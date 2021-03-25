import { SET_UP } from './testTypes';

const initialState = {
  set_up: 'not connected',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // return true or false based on the string. Update Redux store state
    case SET_UP:
      return { set_up: 'connected to redux' };
    default:
      return state;
  }
};

export default reducer;
