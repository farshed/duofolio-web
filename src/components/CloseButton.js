import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';
import close from '../assets/close.svg';

function CloseButton(props) {
	function goBack(e) {
		e.preventDefault();
		props.goToPage('home');
	}

	return <CloseIcon src={close} onClick={goBack} alt="" />;
}

export default connect(null, actions)(CloseButton);

const CloseIcon = styled.img`
	height: 0.95em;
	width: 0.95em;
	position: absolute;
	top: 0.8em;
	right: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
