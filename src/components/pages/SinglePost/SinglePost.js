import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import { Col, Button, Row, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import dateToStr from '../../../utils/dateToStr';

const SinglePost = () => {
	const { id } = useParams();
	const postData = useSelector(state => getPostById(state, id));
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();

	const remove = () => {
		dispatch(removePost(postData.id));
	};

	if (!postData) return <Navigate to='/' />;
	else
		return (
			<>
				<article>
					<Row className='d-flex justify-content-between'>
						<Col>
							<h2>{postData.title}</h2>
						</Col>
						<Col>
							<Link key={postData.id} to={`/post/edit/${postData.id}`}>
								<Button variant='outline-info' className='m-3 '>
									Edit
								</Button>
							</Link>
							<Button variant='outline-danger' onClick={handleShow}>
								Delete
							</Button>
						</Col>
					</Row>
					<h3>
						<span>Author: </span>
						{postData.author}
					</h3>
					<h4>
						<span>Published: </span>
						{dateToStr(postData.publishedDate)}
					</h4>
					<br />
					<b>Category: </b>
					<span className='text-muted'>
						{postData.category ? postData.category : 'not selected'}
					</span>
					<br />
					<p dangerouslySetInnerHTML={{ __html: postData.content }}></p>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Are you sure?</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							This operation will completely remove the post. Are you sure you
							want to do that?
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Cancel
							</Button>
							<Button
								variant='danger'
								onClick={function (e) {
									handleClose();
									remove();
								}}>
								Remove
							</Button>
						</Modal.Footer>
					</Modal>
				</article>
			</>
		);
};

export default SinglePost;
