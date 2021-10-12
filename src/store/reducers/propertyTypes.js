import {PROPERTY_TYPES} from '../actionTypes';

const reducer = (initialState = [], action) => {
  switch (action.type) {
    case PROPERTY_TYPES:
      return [...action.payload];
    default:
      return initialState;
  }
};

export default reducer;
