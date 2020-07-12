import { combineReducers } from 'redux';
import routes from './routes';
import book from './book';
import location from './location';
import settings from './settings';

export default combineReducers({
	routes,
	book,
	location,
	settings
});
