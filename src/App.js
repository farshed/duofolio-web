import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
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
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={palette['light']}>
					<Router />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
