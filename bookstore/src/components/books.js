import React from 'react';
import CreateNewBook from './createNewBook';
import DisplayBooks from './displayBook';
import { v4 as uuidv4 } from 'uuid';

class Books extends React.Component {

constructor(props) {
    super(props);
    this.state = {
    books: [
      {type: 'Science fiction', title: 'Book One', author: "author", id: uuidv4()},
      {type: 'Economy', title: 'Book Two', author: "author", id: uuidv4()},
      {type: 'Documentation', title: 'Book Three', author: "author", id: uuidv4()}
    ]
  }
  }

    render () {
        const bookArray = this.state.books
        return (
            <div>
            < DisplayBooks bookList={bookArray}/>
            <CreateNewBook id="categories" name="categories" selected={true} />
            </div>
            )
    }

};
export default Books;

