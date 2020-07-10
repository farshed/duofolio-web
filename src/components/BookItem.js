import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

function BookItem(props) {
	function openBook() {
		props.selectBook(props.book);
		props.goToPage('reader');
	}

	return <Title onClick={openBook}>{props.book.name.replace('.epub', '')}</Title>;
}

export default connect(null, actions)(BookItem);

const Title = styled.p`
	font-size: 1.5em;
	user-select: none;
	cursor: pointer;
`;
