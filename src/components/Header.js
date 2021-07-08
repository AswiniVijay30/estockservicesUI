import React from 'react'
import {Navbar,NavDropdown,FormControl,Form,Button,Nav} from 'react-bootstrap'


const Header = () => {

  return (
<header>

<Navbar bg="primary" expand="lg" variant="dark">
<span className="material-icons">
trending_up
</span>
  <Navbar.Brand href="#">E-Stock Market</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Nav.Link href="#" className="text-light w-25">Add Company</Nav.Link>
  
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="w-50">
      <NavDropdown title="List of Companies" id="basic-nav-dropdown">
        <NavDropdown.Item>Company 1</NavDropdown.Item>
        <NavDropdown.Item>Company 2</NavDropdown.Item>
        <NavDropdown.Item>Company 3</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search by Company Code" className="mr-sm-2 w-25" />
      <Button variant="outline-light">Search</Button>
    </Form>
    
  </Navbar.Collapse>
</Navbar>
</header>

  );
}
export default Header;