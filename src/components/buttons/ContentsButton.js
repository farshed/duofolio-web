import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ReactComponent as Contents } from '../../assets/contents.svg';

function ContentsButton(props) {
	function onClick(e) {
		e.preventDefault();
		props.setVisible(!props.isVisible);
	}

	return <ContentsIcon onClick={onClick} fill={props.foreground} />;
}

function mapStateToProps(state) {
	return { foreground: state.settings.fg };
}

export default connect(mapStateToProps, null)(ContentsButton);

const ContentsIcon = styled(Contents)`
	height: 1em;
	width: 1em;
	padding: 0.2em;
	border-radius: 1em;
	position: absolute;
	top: 0.8em;
	right: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
