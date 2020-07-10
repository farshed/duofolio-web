import React from 'react';
import styled from 'styled-components';
import close from '../assets/close.svg';

function Reader() {
	return (
		<Wrapper>
			<CloseIcon src={close} alt="" />
		</Wrapper>
	);
}

export default Reader;

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
`;

const CloseIcon = styled.img`
	height: 0.95em;
	width: 0.95em;
	position: absolute;
	top: 0.8em;
	right: 0.8em;
	cursor: pointer;
`;
