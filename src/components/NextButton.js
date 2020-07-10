import React from 'react';
import styled from 'styled-components';
import next from '../assets/next.svg';

function NextButton(props) {
	function goNext(e) {
		e.preventDefault();
		props.rendition.next();
	}

	return <Next src={next} onClick={goNext} alt="" />;
}

export default NextButton;

const Next = styled.img`
	height: 1.1em;
	width: 1.1em;
	position: absolute;
	bottom: 1em;
	right: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
