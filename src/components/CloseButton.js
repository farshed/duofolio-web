import React from 'react';
import styled, { useTheme } from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { ReactComponent as Close } from '../assets/close.svg';

function CloseButton(props) {
	const theme = useTheme();

	function goBack(e) {
		e.preventDefault();
		props.goToPage('home');
	}

	return <CloseIcon onClick={goBack} fill={theme.foreground} />;
}

export default connect(null, actions)(CloseButton);

const CloseIcon = styled(Close)`
	height: 0.95em;
	width: 0.95em;
	position: absolute;
	top: 0.8em;
	right: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
