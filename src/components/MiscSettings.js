import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

const langs = ['French', 'Spanish'];

function MiscSettings(props) {
	return (
		<Wrapper>
			<ItemWrapper>
				<Text>Choose language</Text>
				<Select
					value={props.language}
					onChange={(e) => props.updateSettings({ language: e.target.value })}>
					{langs.map((lang, i) => (
						<option value={lang} key={i}>
							{lang}
						</option>
					))}
				</Select>
			</ItemWrapper>
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return { language: state.settings.language };
}

export default connect(mapStateToProps, actions)(MiscSettings);

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
