import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import * as actions from '../actions';
import plus from '../assets/plus.svg';

function AddButton(props) {
	function onButtonClick(e) {
		e.stopPropagation();
		document.getElementById('addBooks').click();
	}

	function handleBooks() {
		let books = document.getElementById('addBooks').files;
		let arr = [];
		for (let i = 0; i < books.length; i++) {
			arr.push(books[i]);
		}
		props.addBooks(arr);
	}

	return (
		<Button onClick={onButtonClick}>
			<Icon src={plus} alt="" />
			<Input
				id="addBooks"
				type="file"
				accept="application/epub+zip"
				multiple
				onChange={handleBooks}
			/>
		</Button>
	);
}

export default connect(null, actions)(AddButton);

const Icon = styled.img`
	height: 30%;
	width: 30%;
`;

const Button = styled(Fab)`
	position: absolute !important;
	bottom: 1em !important;
	right: 1em !important;
	background-color: #275efe !important;
`;

const Input = styled.input`
	display: none;
`;
