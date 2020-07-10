import React from 'react';
import styled from 'styled-components';
import AddButton from '../components/AddButton';

function Home() {
	return (
		<Wrapper>
			<Monogram>linguify</Monogram>
			<AddButton />
		</Wrapper>
	);
}

export default Home;

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 0px;
	background-color: ${(props) => props.theme.background};
	padding-top: 5%;
`;

const Monogram = styled.p`
	font-size: 3.5em;
	font-family: Pacifico;
	color: ${(props) => props.theme.foreground};
	user-select: none;
`;
