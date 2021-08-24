import * as Actions from './bookAction';

const bookReducer = (state = {}, action = {}) => {
    switch (action.type) {
      case Actions.BOOK_ADDED:
      case Actions.BOOK_REMOVED:
      case Actions.BOOK_DISPLAYED:
      default: return state;
    }
  }

  export default bookReducer;