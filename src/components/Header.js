import React from 'react';
import styled from 'styled-components';
import BackButton from './buttons/BackButton';
import ContentsButton from './buttons/ContentsButton';

function Header(props) {
	return (
		<Wrapper>
			<BackButton />
			<ContentsButton isVisible={props.isVisible} setVisible={props.setVisible} />
		</Wrapper>
	);
}

export default Header;

const Wrapper = styled.div`
	min-height: 5%;
	width: 100%;
	flex-direction: row;
	align-items: center;
	/* background-color: ${(props) => props.theme.background}; */
	background-color: red;
`;
