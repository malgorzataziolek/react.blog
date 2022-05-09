const initialState = {
	posts: [
		{
			id: '1',
			title: 'Article title',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-02-2022'),
			author: 'John Doe',
			category: 'Movie',
		},
		{
			id: '2',
			title: 'Article title II',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-02-2022'),
			author: 'John Doe',
			category: 'Sport',
		},
		{
			id: '3',
			title: 'Article title III',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-02-2022'),
			author: 'John Doe',
			category: 'Movie',
		},
	],
	categories: ['Sport', 'Movie', 'News'],
};

export default initialState;
