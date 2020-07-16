import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { ReactComponent as Back } from '../../assets/back.svg';

function BackButton(props) {
	function goBack(e) {
		e.preventDefault();
		props.goToPage('home');
	}

	return <BackIcon onClick={goBack} fill={props.foreground} />;
}

function mapStateToProps(state) {
	return { foreground: state.settings.fg };
}

export default connect(mapStateToProps, actions)(BackButton);

const BackIcon = styled(Back)`
	height: 0.95em;
	width: 0.95em;
	position: absolute;
	top: 0.8em;
	left: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
