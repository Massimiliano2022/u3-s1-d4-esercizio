import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
    state = {
        selected: false
    }
    render() {
        const { book } = this.props;
        return (

            <Card
                className={this.state.selected ? "my-3 border-danger" : "my-3"}
                onClick={() =>
                    this.setState({ selected: !this.state.selected })
                }
            >
                <Card.Img className="img-fluid" variant="top" src={book.img} style={{ objectFit: 'cover', height:'500px' }} />
                <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text>
                        {book.category}
                    </Card.Text>
                    <Card.Text>
                        {book.price}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
                {this.state.selected && <CommentArea bookId={book.asin} />}
            </Card>
        )
    };
};

export default SingleBook;