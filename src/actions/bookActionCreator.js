import * as actions from '../actions/bookAction';
import { v4 as uuidv4 } from 'uuid';

export const addBook = ({title, category}) => ({
    type: actions.BOOK_ADDED,
    id: uuidv4(),
   title,
   category
})

export const removeBook = (id) => ({
    type: actions.BOOK_REMOVED,
    id,
})

export const getBook = (payload) => ({
    type: actions.BOOK_GOTTEN,
    payload,
  });