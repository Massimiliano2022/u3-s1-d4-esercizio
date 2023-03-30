import {Container} from "react-bootstrap";

const MyFooter = props => (

    <footer className="bg-dark text-white py-3">
        <Container fluid>
            <p className="m-auto">{props.footerContent}</p>
        </Container>
    </footer>
);

export default MyFooter;