import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BackButton from './buttons/BackButton';
import ContentsButton from './buttons/ContentsButton';

function Header(props) {
	return (
		<Wrapper bg={props.bg}>
			<BackButton />
			<ContentsButton isVisible={props.isVisible} setVisible={props.setVisible} />
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return { bg: state.settings.bg };
}

export default connect(mapStateToProps, null)(Header);

const Wrapper = styled.div`
	min-height: 3%;
	width: 100%;
	flex-direction: row;
	align-items: center;
	background-color: ${(props) => props.theme.bg};
`;
