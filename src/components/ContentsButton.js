import React from 'react';
import styled, { useTheme } from 'styled-components';
import contentsLight from '../assets/contentsLight.svg';
import contentsDark from '../assets/contentsDark.svg';

function ContentsButton(props) {
	const theme = useTheme();

	function onClick(e) {
		e.preventDefault();
		props.setVisible(!props.isVisible);
	}

	console.log(theme.name);
	return (
		<ContentsIcon
			src={theme.name === 'dark' ? contentsLight : contentsDark}
			onClick={onClick}
			alt=""
		/>
	);
}

export default ContentsButton;

const ContentsIcon = styled.img`
	height: 1em;
	width: 1em;
	padding: 0.2em;
	border-radius: 1em;
	position: absolute;
	top: 0.8em;
	left: 0.8em;
	cursor: pointer;
	z-index: 10;
`;
