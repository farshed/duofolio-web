import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

const fonts = {
	Arial: 'Arial',
	Baskervville: "'Baskervville', serif",
	Caslon: "'Libre Caslon Text', serif",
	Lora: "'Lora', serif",
	Raleway: "'Raleway', sans-serif",
	Roboto: "'Roboto', sans-serif",
	'Special Elite': "'Special Elite'"
};
const sizes = ['12', '13', '14', '15', '16', '17', '18', '19', '20'];
const heights = [1.4, 1.6, 1.8, 2.0, 2.2, 2.4];

function Fonts(props) {
	return (
		<Wrapper>
			<Title>Font</Title>
			<ItemWrapper>
				<Text>Font Family</Text>
				<Select
					value={props.font}
					onChange={(e) => props.updateSettings({ font: e.target.value })}>
					{Object.keys(fonts).map((font, i) => (
						<option value={fonts[font]} key={i}>
							{font}
						</option>
					))}
				</Select>
			</ItemWrapper>
			<ItemWrapper>
				<Text>Font Size</Text>
				<Select
					value={props.size}
					onChange={(e) => props.updateSettings({ size: e.target.value })}>
					{sizes.map((size, i) => (
						<option value={`${size}px`} key={i}>
							{size}
						</option>
					))}
				</Select>
			</ItemWrapper>
			<ItemWrapper>
				<Text>Line Height</Text>
				<Select
					value={props.height}
					onChange={(e) => props.updateSettings({ height: e.target.value })}>
					{heights.map((height, i) => (
						<option value={height} key={i}>
							{height}
						</option>
					))}
				</Select>
			</ItemWrapper>
		</Wrapper>
	);
}

function mapStateToProps({ settings }) {
	return {
		font: settings.font,
		size: settings.size,
		height: settings.height
	};
}

export default connect(mapStateToProps, actions)(Fonts);

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
	justify-content: space-between;
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

const Select = styled.select`
	margin-right: 1em;
`;
