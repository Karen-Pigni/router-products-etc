import React, { useState, useEffect } from 'react';
import MyInput from '../components/MyInput';
import { Card, CardContent, Button } from '@material-ui/core';

const Admin = () => {
	const [title, setTitle] = useState('');
	const [url, setURL] = useState('');
	const [price, setPrice] = useState('');

    let local = JSON.parse(localStorage.getItem('products'))
    if(local == null) local = []
    const [products,setProducts] = useState(local)

	const handlerClick = () => {

        let product = {
            title,
            url,
            price
        }

        setTitle('')
        setURL('')
        setPrice('')
    
        setProducts([...products,product])
    };

    useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products))
    },[products])

	return (
		<div>
			<Card>
				<CardContent>
					<h1>Administrar</h1>
					<MyInput value={title} handler={setTitle} Label='Titulo' />
					<MyInput value={url} handler={setURL} Label='URL' />
					<MyInput value={price} handler={setPrice} Label='Precio' />
				</CardContent>
				<Button onClick={handlerClick} variant='contained' color='primary'>
					Agregar producto
				</Button>
			</Card>
		</div>
	);
};

export default Admin;
