import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ReactComponent as Next } from '../../assets/icons/next.svg';

function NextButton(props) {
	function goNext(e) {
		e.preventDefault();
		props.rendition.next();
	}

	return (
		<NextIcon
			onClick={goNext}
			fill={props.foreground}
			stroke={props.foreground}
			strokeWidth={12}
		/>
	);
}

function mapStateToProps(state) {
	return { foreground: state.settings.fg };
}

export default connect(mapStateToProps, null)(NextButton);

const NextIcon = styled(Next)`
	height: 0.9em;
	width: 0.9em;
	padding: 0.2em;
	border-radius: 1em;
	position: absolute;
	bottom: 0.75em;
	right: 0.75em;
	cursor: pointer;
	z-index: 10;
`;
