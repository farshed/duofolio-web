const InitialState = { theme: 'light' };

export default function (state = InitialState, action) {
	switch (action.type) {
		case 'change_theme':
			return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
		default:
			return state;
	}
}
