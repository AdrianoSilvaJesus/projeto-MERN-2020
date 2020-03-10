import React from 'react';

const ItemExercicio = props => {
	return(
		<li>
			<div>
				<h1>{props.titulo}</h1>
				<p>{props.descricao}</p>
			</div>
		</li>
	);
}

export default ItemExercicio;