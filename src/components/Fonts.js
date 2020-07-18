import React from 'react';
import styled from 'styled-components';

function Fonts() {
	return (
		<Wrapper>
			<Title>Font</Title>
			<ItemWrapper>
				<Text>Font Family</Text>
			</ItemWrapper>
			<ItemWrapper>
				<Text>Font Size</Text>
				<select name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
			</ItemWrapper>
		</Wrapper>
	);
}

export default Fonts;

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
`;

const ItemWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

const Title = styled.p`
	font-size: 1em;
	color: black;
	font-family: Roboto;
	font-weight: bold;
	margin-left: 1em;
`;

const Text = styled.p`
	font-size: 0.9em;
	color: black;
	font-family: Roboto;
	margin-left: 1em;
	margin-right: 1em;
`;
