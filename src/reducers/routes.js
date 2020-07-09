const InitialState = 'home';

export default function (state = InitialState, action) {
	switch (action.type) {
		case 'navigate':
			return action.payload;
		default:
			return state;
	}
}
