import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => {
	const [title, setTitle] = useState(props.title || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
	const [shortDescription, setDescription] = useState(
		props.shortDescription || ''
	);

	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm();

	const [content, setContent] = useState(props.content || '');
	const [contentError, setContentError] = useState(false);
	const [dateError, setDateError] = useState(false);

	const handleSubmit = () => {
		setContentError(!content);
		setDateError(!publishedDate);
		if (content && publishedDate) {
			action({ title, author, publishedDate, shortDescription, content });
		}
	};
	return (
		<Form onSubmit={validate(handleSubmit)}>
			<Form.Group className='mb-3' controlId='formTitle'>
				<Form.Label>Title</Form.Label>
				<Form.Control
					{...register('title', { required: true, minLength: 3 })}
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
					placeholder='Enter title'
				/>
				{errors?.title?.type === 'required' && (
					<small className='d-block form-text text-danger mt-2'>
						This field is required
					</small>
				)}
				{errors?.title?.type === 'minLength' && (
					<small className='d-block form-text text-danger mt-2'>
						Title is too short (min 3)
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formAuthor'>
				<Form.Label>Author</Form.Label>
				<Form.Control
					{...register('author', { required: true, minLength: 3 })}
					type='text'
					placeholder='Enter Author'
					value={author}
					onChange={e => setAuthor(e.target.value)}
				/>
				{errors?.author?.type === 'required' && (
					<small className='d-block form-text text-danger mt-2'>
						This field is required
					</small>
				)}
				{errors?.author?.type === 'minLength' && (
					<small className='d-block form-text text-danger mt-2'>
						Author is too short (min 3)
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formPublished'>
				<Form.Label>Published</Form.Label>
				<DatePicker
					dateFormat='dd/MM/yyyy'
					selected={publishedDate}
					onChange={date => setPublishedDate(date)}
				/>
				{dateError && (
					<small className='d-block form-text text-warning mt-2'>
						This field is required
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formDescription'>
				<Form.Label>Short Description</Form.Label>
				<Form.Control
					{...register('shortDescription', { required: true, minLength: 20 })}
					as='textarea'
					placeholder='Leave a comment here'
					value={shortDescription}
					size='lg'
					rows={4}
					onChange={e => setDescription(e.target.value)}
				/>
				{errors?.shortDescription?.type === 'required' && (
					<small className='d-block form-text text-danger mt-2'>
						This field is required
					</small>
				)}
				{errors?.shortDescription?.type === 'minLength' && (
					<small className='d-block form-text text-danger mt-2'>
						Short Description is too short (min 20)
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formContent'>
				<Form.Label>Main content</Form.Label>
				<ReactQuill
					className='shadow-sm'
					theme='snow'
					style={{
						height: 350,
						marginTop: '1rem',
						display: 'flex',
						flexDirection: 'column',
					}}
					value={content}
					modules={{
						toolbar: [
							[{ size: [] }],
							['bold', 'italic', 'underline'],
							[{ align: [] }],
							[{ list: 'ordered' }, { list: 'bullet' }],
							['clean'],
						],
					}}
					formats={[
						'header',
						'font',
						'size',
						'bold',
						'italic',
						'underline',
						'strike',
						'blockquote',
						'color',
						'background',
						'list',
						'bullet',
					]}
					onChange={setContent}
				/>
				{contentError && (
					<small className='d-block form-text text-danger mt-2'>
						Content can't be empty
					</small>
				)}
			</Form.Group>
			<Button variant='primary' type='submit'>
				Add post
			</Button>
		</Form>
	);
};
PostForm.propTypes = {
	action: PropTypes.func.isRequired,
	actionText: PropTypes.string.isRequired,
	title: PropTypes.string,
	author: PropTypes.string,
	publishedDate: PropTypes.string,
	shortDescription: PropTypes.string,
	content: PropTypes.string,
};
export default PostForm;
