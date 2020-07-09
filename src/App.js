import React from 'react';
import { ThemeProvider } from 'styled-components';
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
		<ThemeProvider theme={palette['light']}>
			<Router />
		</ThemeProvider>
	);
}

export default App;
