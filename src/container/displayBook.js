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
                        <li className="booklist" key={book.id}>
                <div>
                    <p className="category">{book.category}</p>
                    <h2 className="booktitle">{book.title}</h2>
                    <h3 className="author">Abimbola</h3>
                    <ul className="actionBtn">
                        <li>Comment</li>
                        <li onClick={()=> removeBook(book.id)}>Remove</li>
                        <li>Edit</li>
                    </ul>
                    </div>
                    <div>
                    <p className="fpercentage">
                      {randomNum}
                      %
                    </p>
                    <p className="completed">Completed</p>
                    <div className="progress progressBar">
                      <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" aria-label="bar" style={barstyle} />
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