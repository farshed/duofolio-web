import React from 'react';
import styled from 'styled-components';

function Header() {
	return <Wrapper />;
}

export default Header;

const Wrapper = styled.div`
	height: 5%;
	width: 100%;
	flex-direction: row;
	align-items: center;
	background-color: ${(props) => props.theme.background};
`;
