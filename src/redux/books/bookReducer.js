import * as actions from '../../actions/bookAction';
// 83QrMVYMDBrPlFBFHiHZ

export const initialBooks = []

const APIUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/83QrMVYMDBrPlFBFHiHZ/books';

const books =  (state = initialBooks, action) => {
  const {id, title, category} = action
      switch (action.type) {
        case actions.BOOK_ADDED:
          fetch(APIUrl, {
            cash: 'reload',
            method: 'POST',
            body: JSON.stringify({
              item_id: id,
              author: 'Abimbola',
              title: title,
              category: category
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(() => {
            window.location.reload();
          });
          return state;
      case actions.BOOK_REMOVED:
        fetch(`'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/83QrMVYMDBrPlFBFHiHZ/books/${id}'`, {
          method: 'DELETE',
          body: JSON.stringify({
            item_id: id,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          return state.filter(book => book.id !== action.id);
        case actions.BOOK_GOTTEN:
          return Object.keys(action.payload).map((key) => ({
            id: key,
            title: action.payload[key][0].title,
            category: action.payload[key][0].category,
          }));
      default: return state;
    }
};

export default books;
