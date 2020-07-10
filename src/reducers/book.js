const InitialState = null;

export default function (state = InitialState, action) {
	switch (action.type) {
		case 'select_book':
			return action.payload;
		default:
			return state;
	}
}
