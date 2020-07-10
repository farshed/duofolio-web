import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import Router from './components/Router';

const palette = {
	light: {
		main: '#fff',
		background: '#03a9f4',
		foreground: '#000000'
	},
	dark: {
		main: '#121212',
		background: '#03a9f4',
		foreground: '#fff'
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
