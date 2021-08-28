import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import { connect, useDispatch } from 'react-redux';
import { removeBook, getBook } from '../actions/bookActionCreator';


const DisplayBooks = (props) => {
const {books, removeBook} = props

const dispatch = useDispatch();
const fetchApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/83QrMVYMDBrPlFBFHiHZ/books/';
useEffect(() => {
  const apiBooks = async () => {
    const fetchBook = await fetch(fetchApi);
    const books = await fetchBook.json();
    return dispatch(getBook(books));
  };
  apiBooks();
}, []);

const randomNum = Math.floor(Math.random() * 100)
const barstyle =  {
    width: `${randomNum}%`
};
    return (
        
        <ul>
            { books.map(book => 
                        <li className="booklist flex" key={book.id}>
                <div>
                    <p className="category">{book.category}</p>
                    <h2 className="booktitle">{book.title}</h2>
                    <h3 className="author">Abimbola</h3>
                    <ul className="actionBtn flex">
                        <li>Comment</li>
                        <li onClick={()=> removeBook(book.id)}>Remove</li>
                        <li>Edit</li>
                    </ul>
                    </div>
                    <div className="flex">
                    <div className="circle" />
                    <div>
                    <p className="percentage">
                      {randomNum}
                      %
                    </p>
                    <p className="completed">Completed</p>
                    </div>
                  </div>
                    <div>
                        <p className="currentchapter">Current Chapter</p>
                        <p className="chapter">
                      Chapter&nbsp;
                      {randomNum}
                    </p>
                        <button className="updatebtn">Update Progress</button>
                    </div>
            </li>)}
        </ul>
        )

};

DisplayBooks.propTypes = {
    books: PropTypes.array,
    removeBook: PropTypes.func
  };

export default connect(state => state, {removeBook})(DisplayBooks);