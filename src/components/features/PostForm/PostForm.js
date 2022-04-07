import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
	const [title, setTitle] = useState(props.title || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
	const [shortDescription, setDescription] = useState(
		props.shortDescription || ''
	);
	const [content, setContent] = useState(props.content || '');

	const handleSubmit = e => {
		e.preventDefault();
		action({ title, author, publishedDate, shortDescription, content });
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
			<Button variant='primary' type='submit'>
				Add post
			</Button>
		</Form>
	);
};

export default PostForm;
