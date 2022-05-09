import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import About from './components/pages/About/About.js';
import PostAdd from './components/pages/PostAdd/PostAdd.js';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
import PostEdit from './components/pages/PostEdit/PostEdit.js';
import SinglePost from './components/pages/SinglePost/SinglePost.js';
import Categories from './components/pages/Categories/Categories.js';
import SingleCategory from './components/pages/SingleCategory/SingleCategory.js';

function App() {
	return (
		<Container>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/post/:id' element={<SinglePost />}></Route>
				<Route path='/post/add' element={<PostAdd />}></Route>
				<Route path='/post/edit/:id' element={<PostEdit />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/categories' element={<Categories />} />
				<Route path='/category/:categoryName' element={<SingleCategory />} />
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
			<Footer />
		</Container>
	);
}

export default App;
