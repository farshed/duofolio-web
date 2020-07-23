import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Toc } from '../assets/icons/contents.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Gear } from '../assets/icons/gear.svg';

function DrawerItem(props) {
	return (
		<Wrapper>
			<ItemWrapper selected={props.tab === 'toc'} onClick={() => props.selectTab('toc')}>
				<TocIcon />
			</ItemWrapper>
			<ItemWrapper selected={props.tab === 'search'} onClick={() => props.selectTab('search')}>
				<SearchIcon />
			</ItemWrapper>
			<ItemWrapper
				selected={props.tab === 'settings'}
				onClick={() => props.selectTab('settings')}>
				<GearIcon />
			</ItemWrapper>
		</Wrapper>
	);
}

export default DrawerItem;

const Wrapper = styled.div`
	position: fixed;
	top: 0px;
	right: 0x;
	height: 3em;
	width: 90%;
	max-width: 300px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
	background-color: #fafafa;
`;

const ItemWrapper = styled.div`
	height: 100%;
	width: 33%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: ${(props) => (props.selected ? ' 2px solid #23286b' : 'none')};
	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`;

const TocIcon = styled(Toc)`
	height: 1em;
	width: 1em;
`;

const SearchIcon = styled(Search)`
	height: 1em;
	width: 1em;
`;

const GearIcon = styled(Gear)`
	height: 1em;
	width: 1em;
`;
