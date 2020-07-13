import React from 'react';
import styled from 'styled-components';

function ContentsItem(props) {
	function onClick(e) {
		e.stopPropagation();
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
	height: 1em;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5em;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => '33' + props.theme.foreground};
	}
`;

const Text = styled.p`
	font-size: 1em;
	font-family: Roboto;
	color: ${(props) => props.theme.foreground};
`;
