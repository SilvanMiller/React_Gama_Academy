import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container fluid="lg">
            <Navbar.Brand href="#">Pokedash</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form className="form-inline">
                <FormControl type="text" placeholder="Search" className="mr-4"></FormControl>
                <Button variant="success">Buscar</Button>
            </Form>
            </Container>
        </Navbar>
    );
    
}

export default Header