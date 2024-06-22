import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './styles.css'

function NavbarPage() {
    return(
        <Container className='container' fluid>
        <Navbar className='mb-3 m-auto brand-nav'  variant="dark"  >
            <Navbar.Brand className='m-auto ' >
                <h1 className='brand' style={{color:'#885353' ,backgroundColor:'none'}}>
                    TodoLists
                </h1>
            </Navbar.Brand>
        </Navbar>
    </Container>
    )  
}
    

export default NavbarPage;
