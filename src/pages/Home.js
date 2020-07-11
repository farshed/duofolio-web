import React from 'react';
import styled from 'styled-components';
import ThemeToggle from '../components/ThemeToggle';
import AddButton from '../components/AddButton';

function Home() {
	return (
		<Wrapper>
			<Monogram>linguify</Monogram>
			<ThemeToggle />
			<a
				href="https://www.github.com/farshed/linguify"
				target="_blank"
				rel="noopener noreferrer">
				<Link>Github</Link>
			</a>
			<Description>Linguify helps you read books in other languages</Description>
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
	justify-content: center;
	align-items: center;
	margin: 0px;
	background-color: ${(props) => props.theme.background};
`;

const Monogram = styled.p`
	font-size: 3.5em;
	font-family: Pacifico;
	color: ${(props) => props.theme.foreground};
	user-select: none;
	position: absolute;
	top: 0px;
	left: 0.5em;
`;

const Description = styled.p`
	font-size: 1.35em;
	font-family: Poppins;
	color: ${(props) => props.theme.foreground};
	padding-bottom: 2.5em;
`;

const Link = styled.p`
	font-size: 1em;
	font-family: Poppins;
	color: ${(props) => props.theme.foreground};
	user-select: none;
	position: absolute;
	bottom: 1em;
	right: 1.5em;
	cursor: pointer;
`;
