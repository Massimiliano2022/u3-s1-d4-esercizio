import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import fantasy from '../books/fantasy.json';
import history from '../books/history.json';
import horror from '../books/horror.json';
import romance from '../books/romance.json';
import scifi from '../books/scifi.json';

const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

const getRandomBooks = () => {
    const randomBooks = [];
    while (randomBooks.length < 24) {
        const randomIndex = Math.floor(Math.random() * allBooks.length);
        const randomBook = allBooks[randomIndex];
        if (!randomBooks.includes(randomBook)) {
            randomBooks.push(randomBook);
        }
    }
    return randomBooks;
};

class AllTheBooks extends Component {
    state = {
        selectedBook: null,
        booksToShow: getRandomBooks()
    };
    render() {
        return (
            <Container fluid>
                <h1>All Books</h1>
                <Row>
                    {this.state.booksToShow.map((book, index) => (
                        <Col md={4}
                            key={`book-${index}`}
                            onClick={() => {
                                console.log("abbiamo cliccato: " + book.title);
                                this.setState({ selectedBook: book });
                            }}
                        >
                            <Card className="my-3">
                                <Card.Img className="img-fluid object-fit-cover w-100" variant="top" src={book.img} style={{ height: '200px' }} />
                                <Card.Body>
                                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                                    <Card.Text>
                                        {book.category}
                                    </Card.Text>
                                    <Card.Text>
                                        {book.price}€
                                    </Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}


export default AllTheBooks;