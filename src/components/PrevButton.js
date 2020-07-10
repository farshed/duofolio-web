import React from 'react';
import styled from 'styled-components';
import prev from '../assets/prev.svg';

function PrevButton(props) {
	function goPrev(e) {
		e.preventDefault();
		props.rendition.prev();
	}

	return <Prev src={prev} onClick={goPrev} alt="" />;
}

export default PrevButton;

const Prev = styled.img`
	height: 1.1em;
	width: 1.1em;
	position: absolute;
	bottom: 1em;
	left: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
