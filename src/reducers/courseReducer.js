import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      // like pushing new action.course onto state array, if it were mutable
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
