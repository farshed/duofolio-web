import { combineReducers } from 'redux';
import routes from './routes';
import shelf from './books';

export default combineReducers({
	routes,
	shelf
});
