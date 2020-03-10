import React from 'react';

import ItemExercicio from './itemExercicio';

import './listaExercicios.css';

const ListaExercicios = props => {

	const exercicios = [
		{titulo:"Peito",descricao:"Treino de Peito"},
		{titulo:"Costas",descricao:"Treino de Costa"},
		{titulo:"Pernas",descricao:"Treino de Pernas"}
	]

	return(
		<ul id="lista-exercicios">
			{exercicios.map((exercicio) => <ItemExercicio titulo={exercicio.titulo} descricao={exercicio.descricao}/>)}
		</ul>
	);
};

export default ListaExercicios;
