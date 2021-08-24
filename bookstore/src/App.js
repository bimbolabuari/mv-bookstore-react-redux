import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import Categories from './redux/categories/categories';
import Books from './components/books';
import DisplayBooks from './components/displayBook';

 const App = () => {
    return (
      <Router>
          <Header/>
          <div>
          <Switch>
             <Route exact path="/">
             <DisplayBooks />
             </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  export default App;