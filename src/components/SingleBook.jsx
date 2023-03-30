import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SingleBook = ({ selectedBook }) => {
    console.log(selectedBook);
    return(
    <Container fluid>
        <h1>Selected Book</h1>
        <Row>
            <Col>
                <Card className="my-3">
                    <Card.Img className="img-fluid object-fit-cover w-100" variant="top" src="" style={{ height: '200px' }} />
                    <Card.Body>
                        <Card.Title className="text-truncate">Title</Card.Title>
                        <Card.Text>
                            Category
                        </Card.Text>
                        <Card.Text>
                            Price
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default SingleBook;