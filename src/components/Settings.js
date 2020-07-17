import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';

function Settings(props) {
	return (
		<Wrapper>
			<Colors />
		</Wrapper>
	);
}

export default Settings;

const Wrapper = styled.div`
	width: 100%;
`;

const ItemWrapper = styled.div`
	height: 33%;
	max-height: 150px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;
