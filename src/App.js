import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './components/Router';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	);
}

export default App;
