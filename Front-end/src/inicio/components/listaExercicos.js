import React from 'react';

import ItemExercicio from './itemExercicio';

const ListaExercicios = props => {

	const exercicios = [
		{titulo:"Peito",treino:"Treino de Peito"},
		{titulo:"Costas",treino:"Treino de Costa"},
		{titulo:"Pernas",treino:"Treino de Pernas"}
	]

	return(
		<ul>
			{exercicios.map((exercicio) => <ItemExercicio />)}
		</ul>
	);
};

export default ListaExercicios;