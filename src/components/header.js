import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
          <div className="header-container">
            <h1 className="title">BOOKSTORE CMS</h1>
            <nav>
            <ul className="nav">
              <li>
                <Link className="link" to="/books">Books</Link>
              </li>
              <li>
                <Link className="link" to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          </div>
        </div>
    )
}

export default Header; 