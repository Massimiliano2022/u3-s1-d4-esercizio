import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
//import AllTheBooks from './components/AllTheBooks';
//import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';


const getRandomBooks = (num, books) => {
  const randomBooks = [];
  while (randomBooks.length < num) {
      const randomIndex = Math.floor(Math.random() * books.length);
      const randomBook = books[randomIndex];
      if (!randomBooks.includes(randomBook)) {
          randomBooks.push(randomBook);
      }
  }
  return randomBooks;
};

function App() {
  
  return (
    <>
      <MyNav brand="EpiBooks" />
      <Welcome heading="Welcome to EpiBooks" subTitle="il miglior shop!" />
      <BookList title="Fantasy" booksArr={getRandomBooks(12,fantasy)}/>
      {/*<BookList title="History" booksArr={getRandomBooks(12,history)}/>
      <BookList title="Horror" booksArr={getRandomBooks(12,horror)}/>
      <BookList title="Romance" booksArr={getRandomBooks(12,romance)}/>
      <BookList title="Scifi" booksArr={getRandomBooks(12,scifi)}/>*/}
      <MyFooter footerContent="EpiBooks" />
    </>
  );
}

export default App;
