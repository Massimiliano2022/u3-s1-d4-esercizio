import { Container } from "react-bootstrap";

const Welcome = props => (

    <Container fluid>
        <div className="bg-dark text-white p-3 my-5">
            <h1>{props.heading}</h1>
            <p>{props.subTitle}</p>
        </div>
    </Container>
);
export default Welcome;