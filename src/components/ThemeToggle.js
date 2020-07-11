import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

function ThemeToggle(props) {
	return (
		<div class="circle">
			<div class="crescent"></div>
		</div>
	);
}

export default connect(null, actions)(ThemeToggle);

const Sun = styled.div``;

const Moon = styled.div``;
