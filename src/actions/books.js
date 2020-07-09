export const addBooks = (books) => {
	return { type: 'add_books', payload: books };
};

export const selectBook = (book) => {
	return { type: 'select_book', payload: book };
};
