import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { ReactComponent as Gear } from '../../assets/gear.svg';

function SettingsButton(props) {
	function openSettings(e) {
		e.preventDefault();
		props.goToPage('home');
	}

	return <GearIcon onClick={openSettings} fill={props.foreground} />;
}

function mapStateToProps(state) {
	return { foreground: state.settings.fg };
}

export default connect(mapStateToProps, actions)(SettingsButton);

const GearIcon = styled(Gear)`
	height: 1em;
	width: 1em;
	position: absolute;
	top: 0.8em;
	right: 4em;
	cursor: pointer;
	z-index: 10;
`;
