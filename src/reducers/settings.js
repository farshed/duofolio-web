const InitialState = {
	bg: '#fafafa',
	fg: '#000000',
	font: 'Default',
	size: '100%'
};

export default function (state = InitialState, action) {
	switch (action.type) {
		case 'modify_settings':
			return { ...state, ...action.payload };
		default:
			return state;
	}
}
