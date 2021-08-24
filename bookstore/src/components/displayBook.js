import React from 'react';

const DisplayBooks = ({ bookList }) => {
    return (
    <ul>
        { bookList.map(book => <li key={book.id}>
            <div>
                <p>{book.type}</p>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
            </div>
                <ul>
                    <li>Comment</li>
                    <li>Remove</li>
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
export default DisplayBooks;