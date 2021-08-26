import React from 'react';
import CreateNewBook from '../components/createNewBook';
import DisplayBooks from '../container/displayBook';
import { v4 as uuidv4 } from 'uuid';
import store from '../redux/cofigureStore';
import { books } from '../redux/books/bookReducer';
// import { useDispatch } from 'react-redux'

const Books = () => {

   
  
      
        return (
            <>
            <DisplayBooks/>
            <CreateNewBook id="categories" name="categories" selected={true} />
            </>
            )

};
export default Books;

