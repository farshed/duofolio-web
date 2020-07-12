import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Prev } from '../assets/prev.svg';

function PrevButton(props) {
	const theme = useTheme();

	function goPrev(e) {
		e.preventDefault();
		props.rendition.prev();
	}

	return (
		<PrevIcon
			onClick={goPrev}
			fill={theme.foreground}
			stroke={theme.foreground}
			strokeWidth={18}
		/>
	);
}

export default PrevButton;

const PrevIcon = styled(Prev)`
	height: 1em;
	width: 1em;
	padding: 0.2em;
	border-radius: 1em;
	position: absolute;
	bottom: 1em;
	left: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
