const InitialState = {};

export default function (state = InitialState, action) {
	switch (action.type) {
		case 'add_location':
			let { key, location } = action.payload;
			state[key] = location;
			return { ...state };
		default:
			return state;
	}
}
