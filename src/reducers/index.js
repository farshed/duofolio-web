import { combineReducers } from 'redux';
import routes from './routes';
import book from './book';
import settings from './settings';

export default combineReducers({
	routes,
	book,
	settings
});
