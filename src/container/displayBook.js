import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { removeBook } from '../actions/bookActionCreator';

const DisplayBooks = (props) => {
    // {books, removeBook }
console.log(props)    
const {books, removeBook } = props
    return (
        <ul>
            { books.map(book => <li key={book.id}>
                <div>
                    <p>{book.type}</p>
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