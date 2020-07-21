import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { ReactComponent as Back } from '../../assets/icons/back.svg';

function BackButton(props) {
	function goBack(e) {
		e.preventDefault();
		props.goToPage('home');
	}

	return <BackIcon onClick={goBack} fill={props.foreground} strokeWidth={18} />;
}

function mapStateToProps(state) {
	return { foreground: state.settings.fg };
}

export default connect(mapStateToProps, actions)(BackButton);

const BackIcon = styled(Back)`
	height: 1em;
	width: 1em;
	position: absolute;
	top: 0.8em;
	left: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
