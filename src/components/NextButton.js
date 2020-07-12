import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Next } from '../assets/next.svg';

function NextButton(props) {
	const theme = useTheme();

	function goNext(e) {
		e.preventDefault();
		props.rendition.next();
	}

	return (
		<NextIcon
			onClick={goNext}
			fill={theme.foreground}
			stroke={theme.foreground}
			strokeWidth={18}
		/>
	);
}

export default NextButton;

const NextIcon = styled(Next)`
	height: 1em;
	width: 1em;
	padding: 0.2em;
	border-radius: 1em;
	position: absolute;
	bottom: 1em;
	right: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
