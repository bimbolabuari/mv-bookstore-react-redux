import { createStore } from 'redux';
import reducer from './bookReducer';

const bookStore = createStore(reducer)

export default bookStore;