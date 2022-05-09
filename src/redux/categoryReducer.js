//selectors
export const getAllCategories = ({ categories }) => categories;
export const getCategoriesByName = ({ categories }, categoryName) =>
	categories.find(category => category.toLowerCase() === categoryName);

// action creators
const categoriesReducer = (statePart = [], action) => {
	switch (action.type) {
		default:
			return statePart;
	}
};

export default categoriesReducer;
