import React from 'react';
import styled from 'styled-components';

function ContentsItem(props) {
	function onClick() {
		props.rendition.display(props.href);
	}

	return (
		<Wrapper onClick={onClick}>
			<Text>{props.label.trim()}</Text>
		</Wrapper>
	);
}

export default ContentsItem;

const Wrapper = styled.div`
	height: 1.2em;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5em;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

const Text = styled.p`
	font-size: 0.9em;
	font-family: Roboto;
	color: #000000;
`;
