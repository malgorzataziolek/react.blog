import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar
			bg='primary'
			variant='dark'
			expand='lg'
			className='mt-4 mb-4 rounded'>
			<Container>
				<Navbar.Brand href='#home'>Blog.app</Navbar.Brand>
				<Nav className='me-2'>
					<Nav.Link as={NavLink} to='/'>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to='/about'>
						About
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
