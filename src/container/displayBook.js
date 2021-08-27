import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import { connect, useDispatch } from 'react-redux';
import { removeBook, getBook } from '../actions/bookActionCreator';

const DisplayBooks = (props) => {
const {books, removeBook} = props



const dispatch = useDispatch();
const fetchApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BIaRoNTXarfAkaRwuuR5/books/';
useEffect(() => {
  const apiBooks = async () => {
    const fetchBook = await fetch(fetchApi);
    const books = await fetchBook.json();
    return dispatch(getBook(books));
  };
  apiBooks();
}, []);

    return (
        <ul>
            { books.map(book => <li key={book.id}>
                <div>
                    <p>{book.category}</p>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                </div>
                    <ul>
                        <li>Comment</li>
                        <li onClick={()=> removeBook(book.id)}>Remove</li>
                        <li>Edit</li>
                    </ul>
                    <div>
                        <p>Completed</p>
                    </div>
                    <div>
                        <p>Current Chapter</p>
                        <button>Update Progress</button>
                    </div>
            </li>) }
        </ul>
        )

};

DisplayBooks.propTypes = {
    books: PropTypes.array,
    removeBook: PropTypes.func
  };

export default connect(state => state, {removeBook})(DisplayBooks);