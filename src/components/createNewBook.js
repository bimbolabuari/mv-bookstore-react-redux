import React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActionCreator';

    const CreateNewBook = ({addBook}) => {
      const [title, setTitle] = useState('');
      const [author, setAuthor] = useState('');
      const [category, setcategory] = useState('Science Fiction');
    
    
      const handleTitleChange = (event) => {
        setTitle(event.target.value)
      }
      const handleAuthorChange = (event) =>  {
        setAuthor(event.target.value)
      }

      const handleTypeChange = (event) => {
        setcategory(event.target.value)
      }

      
      const handleSubmit = (event) => {
        event.preventDefault()
        addBook({title, author, category})
        return false
      }
        return (
        <div>
            <h2>Add new Book</h2>
            <form>
                <input type="text" placeholder="Book title" value={title} onChange={handleTitleChange}  required/>
                <input type="text" placeholder="Book Author" value={author} onChange={handleAuthorChange} required/>
                <select  onChange={handleTypeChange}>
                <option>Science Fiction</option>
                <option>Economy</option>
                <option>Action</option>
                <option>Documentaries</option>
                </select>
                <button type='button' onClick={event => handleSubmit(event)}>Add Book</button>
            </form>
        </div>
        );
      
};


CreateNewBook.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    addBook: PropTypes.func
  };

  export default connect(state => state, {addBook})(CreateNewBook);