export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      // like pushing new action.course onto state array, if it were mutable
      debugger;
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
