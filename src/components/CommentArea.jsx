import { Component } from "react";
import { Button, Card, ListGroup, Spinner } from "react-bootstrap";
import CommentList from "./CommentList";

class CommentArea extends Component {
    state = {
        comments: [],
        rate: "",
        elementId: "",
    };

    componentDidMount = () => {
        console.log("didMount()");
        this.fetchComments();
    };

    fetchComments = async () => {
        try {
            console.log(this.props.bookId);
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookId, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMjc3ZjBlNzg3MDAwMTRkODkxZTQiLCJpYXQiOjE2ODA1NDk3NTksImV4cCI6MTY4MTc1OTM1OX0.l8Su5LD_3s2wDPViXp7YLazG6tVtxmBPktI3OprdsIQ",
                },
            });
            console.log(response);
            if (response.ok) {
                let posts = await response.json();
                console.log(posts);
                this.setState({ comments: posts });
                console.log("setState() avvenuto");
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        console.log(this.state.comments);
        return (
            <>
                {/*{this.state.comments.map(comment =>
                    <CommentList commentObj={comment} />
                )}*/}
                {/*{this.state.comments ? (
                    <CommentList comment={this.state.comments}/>
                ) : (
                    <Spinner variant = "success" animation="grow"/>
                )}*/}
            </>
        );
    }
}
export default CommentArea;
