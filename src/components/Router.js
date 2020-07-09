import React from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import Reader from '../pages/Reader';

function Router(props) {
	switch (props.currentPage) {
		case 'home':
			return <Home />;
		case 'reader':
			return <Reader />;
		default:
			return <Home />;
	}
}

function mapStateToProps(state) {
	return { currentPage: state.routes };
}

export default connect(mapStateToProps, null)(Router);
