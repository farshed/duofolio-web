import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

const colors = ['#fafafa', '#f8f1e3', '#bebebe', '#5a5a5c', '#121212'];

function Colors(props) {
	const [pickerVal, setPickerVal] = useState(props.background);

	function handleColor(e) {
		e.stopPropagation();
		let color = document.getElementById('picker').value;
		setPickerVal(color);
	}

	return (
		<Wrapper>
			<Title>Background Color</Title>
			<ColorsWrapper>
				{colors.map((color, i) => (
					<Color color={color} onClick={() => props.updateSettings({ bg: color })} key={i} />
				))}
			</ColorsWrapper>
			<PickerWrapper>
				<Text>Choose a custom background</Text>
				<Picker
					id="picker"
					type="color"
					value={pickerVal}
					onChange={handleColor}
					onBlur={() => props.updateSettings({ bg: pickerVal })}
				/>
			</PickerWrapper>
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return { background: state.settings.bg };
}

export default connect(mapStateToProps, actions)(Colors);

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
`;

const Color = styled.div`
	height: 2em;
	width: 2em;
	border-radius: 2em;
	background-color: ${(props) => props.color};
	border: 1px solid rgba(0, 0, 0, 0.25);
`;

const ColorsWrapper = styled.div`
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

const PickerWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Picker = styled.input`
	height: 1em;
	width: 2em;
	margin-right: 1em;
	background-color: ${(props) => props.background};
`;
