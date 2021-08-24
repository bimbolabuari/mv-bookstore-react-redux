import React from 'react';
import PropTypes from "prop-types";

const CreateNewBook = (props) => {
    return (
    <div>
        <h2>Add new Book</h2>
        <form>
            <input type="text" placeholder="Book title" />
            <input type="text" placeholder="Book Author" />
            <select id={props.id} name={props.name}>
            <option>Science Fiction</option>
            <option>Economy</option>
            <option>Action</option>
            <option>Documentaries</option>
            </select>
            <button>Add Book</button>
        </form>
    </div>
    )
};

CreateNewBook.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
  };

export default CreateNewBook;