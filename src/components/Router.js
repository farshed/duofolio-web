import React from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import Reader from '../pages/Reader';

function Router(props) {
	// props.currentPage
	switch ('home') {
		case 'home':
			return <Home />;
		case 'reader':
			return <Reader />;
		default:
			return <Home />;
	}
}

function mapStateToProps(state) {
	return { currentPage: state.routes.page };
}

export default Router;

// export default connect(mapStateToProps, null)(Router);
