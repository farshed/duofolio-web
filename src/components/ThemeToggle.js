import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

function ThemeToggle(props) {
	function onChange(e) {
		e.stopPropagation();
		props.changeTheme();
	}

	return (
		<Wrapper>
			<Sun onClick={onChange}>
				<Moon />
			</Sun>
		</Wrapper>
	);
}

export default connect(null, actions)(ThemeToggle);

const Wrapper = styled.div`
	position: absolute;
	top: 1.75em;
	right: 1.75em;
	cursor: pointer;
`;

const Sun = styled.div`
	position: relative;
	width: 2.5em;
	height: 2.5em;
	border-radius: 100%;
	background: ${(props) =>
		props.theme.name === 'light'
			? 'linear-gradient(40deg, #ff0080, #ff8c00 70%)'
			: 'linear-gradient(40deg, #8983F7, #A3DAFB 70%)'};
	margin: auto;
`;

const Moon = styled.div`
	position: absolute;
	right: 0;
	width: 1.875em;
	height: 1.875em;
	border-radius: 100%;
	background-color: ${(props) => props.theme.background};
	transform: ${(props) => (props.theme.name === 'light' ? 'scale(0)' : 'scale(1)')};
	transform-origin: top right;
	transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
