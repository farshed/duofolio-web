import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NextButton from './buttons/NextButton';
import PrevButton from './buttons/PrevButton';

function Footer(props) {
	return (
		<Wrapper bg={props.bg}>
			<NextButton rendition={props.rendition} />
			<PrevButton rendition={props.rendition} />
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return { bg: state.settings.bg };
}

export default connect(mapStateToProps, null)(Footer);

const Wrapper = styled.div`
	min-height: 2%;
	width: 100%;
	flex-direction: row;
	align-items: center;
	/* background-color: ${(props) => props.theme.bg}; */
  background-color: red;
`;
