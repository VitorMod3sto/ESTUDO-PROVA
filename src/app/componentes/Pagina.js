import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";


export default function Pagina(props) {

    return (
        <>
            <Navbar expand="lg" className="bg-dark text-white">
                <Container>
                    <Navbar.Brand href="/filmes/filmes-cartaz" className="text-white">Cinema</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title={<span className="text-white">Filmes</span>} >
                                <NavDropdown.Item href="/filmes/filmes-popular" >Popular</NavDropdown.Item>     
                                <NavDropdown.Item href="/filmes">Melhor Avaliados</NavDropdown.Item>   
                                <NavDropdown.Item href="/filmes/filmes-cartaz">Em Cartaz</NavDropdown.Item>     
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="bg-dark text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>
            <Container>
                {props.children}
            </Container>
        </>
    )
}
