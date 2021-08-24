import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h1>BOOKSTORE CMS</h1>
            <nav>
            <ul>
              <li>
                <Link className="link" to="/books">Books</Link>
              </li>
              <li>
                <Link className="link" to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Header; 