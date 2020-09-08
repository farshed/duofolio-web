import React, { useEffect } from 'react';
import styled from 'styled-components';
import OpenButton from '../components/buttons/OpenButton';

function Home() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/x-frame-bypass';
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<Wrapper>
			<Monogram>Duofolio</Monogram>
			<a
				href="https://www.github.com/farshed/duofolio"
				target="_blank"
				rel="noopener noreferrer">
				<Link>Github</Link>
			</a>
			<Description>Duofolio helps you read books in other languages</Description>
			<OpenButton />
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
	background-color: #fafafa;
`;

const Monogram = styled.p`
	font-size: 3.5em;
	font-family: Pacifico;
	color: #0f2439;
	user-select: none;
	position: absolute;
	top: 0px;
	left: 0.5em;
`;

const Description = styled.p`
	font-size: 1.35em;
	font-family: Poppins;
	color: #0f2439;
	padding: 1em;
	padding-bottom: 2.5em;
	text-align: center;
	z-index: 3;
`;

const Link = styled.p`
	font-size: 1em;
	font-family: Poppins;
	color: #0f2439;
	user-select: none;
	position: absolute;
	bottom: 1em;
	right: 1.5em;
	cursor: pointer;
`;
