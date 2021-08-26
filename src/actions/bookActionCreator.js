import * as actions from '../actions/bookAction';
import { v4 as uuidv4 } from 'uuid';

export const addBook = ({title, author, genre}) => ({
    type: actions.BOOK_ADDED,
    id: uuidv4(),
   title,
   author,
   genre
})

export const removeBook = (id) => ({
    type: actions.BOOK_REMOVED,
    id
})