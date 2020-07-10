import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import Router from './components/Router';

const palette = {
	light: {
		accent: '#fafafa',
		foreground: '#0f2439',
		background: '#fafafa'
	},
	dark: {
		accent: '#0f2439',
		foreground: '#fafafa',
		background: '#33363c'
	}
};

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={palette['light']}>
				<Router />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
