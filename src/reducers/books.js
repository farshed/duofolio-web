const InitialState = { books: [], currentBook: null };

export default function (state = InitialState, action) {
	switch (action.type) {
		case 'add_books':
			return { ...state, books: [...state.books, ...action.payload] };
		case 'select_book':
			return { ...state, currentBook: action.payload };
		default:
			return state;
	}
}
