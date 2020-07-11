import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

function AddButton(props) {
	function onButtonClick(e) {
		e.stopPropagation();
		document.getElementById('addBooks').click();
	}

	function handleBooks() {
		let book = document.getElementById('addBooks').files;
		if (book[0]) {
			props.selectBook(book[0]);
			props.goToPage('reader');
		}
	}

	return (
		<Wrapper onClick={onButtonClick}>
			<Label>Open a book</Label>
			<Input id="addBooks" type="file" accept="application/epub+zip" onChange={handleBooks} />
		</Wrapper>
	);
}

export default connect(null, actions)(AddButton);

const Wrapper = styled.div`
	height: 2.7em;
	width: 8em;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.foreground};
	border-radius: 0.35em;
	box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
	cursor: pointer;
`;

const Label = styled.p`
	font-size: 1em;
	font-family: Roboto;
	color: ${(props) => props.theme.accent};
	user-select: none;
`;

const Input = styled.input`
	display: none;
`;
