import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost, getPostById } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
	const { id } = useParams();
	const postData = useSelector(state => getPostById(state, id));
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = post => {
		dispatch(editPost({ ...post, id }));
		navigate('/');
	};

	return (
		<PostForm
			action={handleSubmit}
			actionText='Edit post'
			title={postData.title}
			author={postData.author}
			content={postData.content}
			publishedDate={postData.publishedDate}
			shortDescription={postData.shortDescription}
			category={postData.category}
		/>
	);
};

export default EditPostForm;
