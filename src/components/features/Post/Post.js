import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { getAllPosts } from '../../../redux/postsRedux';
import dateToStr from '../../../utils/dateToStr';

const Post = () => {
	const posts = useSelector(state => getAllPosts(state));
	return (
		<section>
			<div className='d-flex justify-content-between'>
				<h2>All posts</h2>
				<Link className='mt-2' to={'/post/add'}>
					<Button variant='outline-primary'>Add post</Button>
				</Link>
			</div>
			<Row className='mt-3'>
				{posts.map(post => (
					<Col key={post.id}>
						<Card>
							<Card.Body>
								<Card.Title className='mb-4'>{post.title}</Card.Title>
								<Card.Subtitle className='mt-2'>
									<span>Author:</span>
									{post.author}
								</Card.Subtitle>
								<Card.Subtitle className='mt-2'>
									<span>Published:</span>
									{dateToStr(post.publishedDate)}
								</Card.Subtitle>
								<Card.Text className='mt-2'>{post.shortDescription}</Card.Text>
								<Link className='mt-auto' to={'/post/' + post.id} key={post.id}>
									<Button variant='primary'>Read more</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</section>
	);
};

export default Post;
