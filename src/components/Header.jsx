import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';

import styles from './header.module.css';

const Header = () => {
	return (
		<Container style={{padding:0}} maxWidth='xl' >
			<div className={styles.header}>
                <Link className={styles.title} to='/'>
				    <h1 >NUCBA - ecommerce</h1>
                </Link>
				<div>
					<Link className={styles.botonNavbar} to='/admin'>
                        <Button>Administración</Button>
                    </Link>
					<Link className={styles.botonNavbar} to='/products'>
                        <Button>Productos</Button>
                    </Link>
				</div>
			</div>
		</Container>
	);
};

export default Header;
