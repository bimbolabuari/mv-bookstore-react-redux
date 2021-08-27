import React from 'react';
import CreateNewBook from '../components/createNewBook';
import DisplayBooks from '../container/displayBook';

const Books = () => {
        return (
            <>
            <DisplayBooks/>
            <CreateNewBook id="categories" name="categories" selected={true} />
            </>
            )
};

export default Books;

