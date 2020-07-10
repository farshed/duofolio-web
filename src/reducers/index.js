import { combineReducers } from 'redux';
import routes from './routes';
import book from './book';

export default combineReducers({
	routes,
	book
});
