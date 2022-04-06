import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddPostForm = props => {
	const dispatch = useDispatch();
	const postId = props.postId;
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishedDate, setPublishedDate] = useState('');
	const [shortDescription, setDescription] = useState('');
	const [content, setContent] = useState('');
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(
			addPost({
				title,
				author,
				publishedDate,
				shortDescription,
				content,
				postId,
			})
		);
		setTitle('');
		setAuthor('');
		setPublishedDate('');
		setDescription('');
		setContent('');
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3' controlId='formTitle'>
				<Form.Label>Title</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter title'
					value={title}
					onChange={e => setTitle(e.target.value)}></Form.Control>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formAuthor'>
				<Form.Label>Author</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter Author'
					value={author}
					onChange={e => setAuthor(e.target.value)}></Form.Control>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formPublished'>
				<Form.Label>Published</Form.Label>
				<Form.Control
					type='date'
					placeholder='Enter Published'
					value={publishedDate}
					onChange={e => setPublishedDate(e.target.value)}></Form.Control>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formDescription'>
				<Form.Label>Short Description</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='Leave a comment here'
					value={shortDescription}
					size='lg'
					rows={4}
					onChange={e => setDescription(e.target.value)}></Form.Control>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formContent'>
				<Form.Label>Main content</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='Leave a comment here'
					value={content}
					size='lg'
					rows={8}
					onChange={e => setContent(e.target.value)}></Form.Control>
			</Form.Group>
			<Button variant='primary' type='submit' onClick={() => navigate('/')}>
				Add post
			</Button>
		</Form>
	);
};

export default AddPostForm;
