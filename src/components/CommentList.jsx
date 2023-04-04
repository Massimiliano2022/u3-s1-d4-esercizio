import { Badge, ListGroup} from "react-bootstrap";

const CommentList = () => {

    <ListGroup>
        {this.props.comment.map(comm => (

            <ListGroup.Item key={comm._id} className="d-flex flex-wrap">
                <span className="me-auto text-truncate">{comm.author}</span>
                <span>
                    <Badge variant="dark">{comm.rate}</Badge>{comm.comment}
                </span>
            </ListGroup.Item>
        ))}
    </ListGroup>
}
export default CommentList;