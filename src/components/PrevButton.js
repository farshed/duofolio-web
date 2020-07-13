import React from 'react';
import styled, { useTheme } from 'styled-components';
import prev from '../assets/prev.svg';

function PrevButton(props) {
	const theme = useTheme();

	function goPrev(e) {
		e.preventDefault();
		props.rendition.prev();
	}

	return <PrevIcon onClick={goPrev} src={prev} alt="" />;
}

export default PrevButton;

const PrevIcon = styled.img`
	height: 0.9em;
	width: 0.9em;
	padding: 0.2em;
	border-radius: 1em;
	position: absolute;
	bottom: 0.75em;
	left: 0.75em;
	cursor: pointer;
	z-index: 10;
`;
