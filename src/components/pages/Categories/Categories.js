import { ListGroup, Container } from 'react-bootstrap';
import { getAllCategories } from '../../../redux/categoryReducer';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Categories = () => {
	const categories = useSelector(getAllCategories);

	return (
		<Container className='text-center'>
			<h1>Select Category</h1>
			<ListGroup className='mx-auto my-5' style={{ maxWidth: '50rem' }}>
				{categories.map(category => (
					<ListGroup.Item
						key={category}
						action
						as={NavLink}
						to={'/category/' + category.toLowerCase()}>
						{category}
					</ListGroup.Item>
				))}
			</ListGroup>
		</Container>
	);
};

export default Categories;
