import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Fonts from './Fonts';
import MiscSettings from './MiscSettings';

function Settings() {
	return (
		<Wrapper>
			<ItemWrapper>
				<Colors />
			</ItemWrapper>
			<ItemWrapper>
				<Fonts />
			</ItemWrapper>
			<ItemWrapper>
				<MiscSettings />
			</ItemWrapper>
		</Wrapper>
	);
}

export default Settings;

const Wrapper = styled.div`
	width: 100%;
`;

const ItemWrapper = styled.div`
	height: 10em;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;
