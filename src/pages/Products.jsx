import React, { useState, useEffect } from 'react';

import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActionArea,
} from '@material-ui/core';

const Products = () => {
	let local = JSON.parse(localStorage.getItem('products'));
    if(local == null) local = []
	const [productos, setProductos] = useState(local);

	return (
		<div style={{width:250,margin:'auto'}}>
			{productos?.map((el) => {
				return (
					<Card style={{marginTop:10}}>
						<CardActionArea>
							<CardMedia height='150' component='img' image={el.url} />
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									{el.title}
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									{el.price}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				);
			})}
		</div>
	);
};

export default Products;
