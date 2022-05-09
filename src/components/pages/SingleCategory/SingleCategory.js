import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsByCategory } from '../../../redux/postsRedux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr';

const SingleCategory = () => {
	const { categoryName } = useParams();
	const categoryData = useSelector(state =>
		getPostsByCategory(state, categoryName)
	);
	console.log(categoryData);
	if (!categoryData || categoryData.length === 0)
		return <h1 className='text-center'>No posts with this category</h1>;
	return (
		<>
			<h1 className='text-center'>{categoryData.category}</h1>
			<Row xs={1} md={2} lg={3} className='g-3'>
				{categoryData.map(post => (
					<Col key={post.id}>
						<Card>
							<Card.Body>
								<Card.Title>{post.title}</Card.Title>
								<Card.Text className='mb-2'>
									<b>Author: </b>
									<span className='text-muted'>{post.author}</span>
								</Card.Text>
								<Card.Text className='mb-2'>
									<b>Published: </b>
									<span className='text-muted'>
										{dateToStr(post.publishedDate)}
									</span>
								</Card.Text>
								<Card.Text className='mb-2'>
									<b>Category: </b>
									<span className='text-muted'>
										{post.category ? post.category : 'not selected'}
									</span>
								</Card.Text>
								<Card.Text>{post.shortDescription}</Card.Text>
								<Button as={NavLink} to={'/post/' + post.id} variant='primary'>
									Read more
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default SingleCategory;
