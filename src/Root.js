import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import Router from './components/Router';

const palette = {
	light: {
		name: 'light',
		accent: '#fafafa',
		foreground: '#0f2439',
		background: '#fafafa'
	},
	dark: {
		name: 'dark',
		accent: '#0f2439',
		foreground: '#fafafa',
		background: '#0f2439'
	}
};

function Root(props) {
	return (
		<ThemeProvider theme={palette[props.theme]}>
			<Router />
		</ThemeProvider>
	);
}

function mapStateToProps(state) {
	return { theme: state.settings.theme };
}

export default connect(mapStateToProps, null)(Root);
