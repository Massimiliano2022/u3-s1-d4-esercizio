import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook"

const BookList = ({ booksArr, title}) => (
        <Container fluid>
            <h2>{title}</h2>
            <Row>
                {booksArr.map(book =>
                    <Col md={4} key={book.asin}>
                        <SingleBook book={book} />
                    </Col>
                )}
            </Row>
        </Container>
)

export default BookList;


