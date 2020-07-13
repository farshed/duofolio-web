import React from 'react';
import styled, { useTheme } from 'styled-components';
import next from '../assets/next.svg';

function NextButton(props) {
	const theme = useTheme();

	function goNext(e) {
		e.preventDefault();
		props.rendition.next();
	}

	return <NextIcon onClick={goNext} src={next} alt="" />;
}

export default NextButton;

const NextIcon = styled.img`
	height: 0.9em;
	width: 0.9em;
	padding: 0.2em;
	border-radius: 1em;
	position: absolute;
	bottom: 0.75em;
	right: 0.75em;
	cursor: pointer;
	z-index: 10;
`;
