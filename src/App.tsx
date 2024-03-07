import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ArticleList2 } from './components/articleList2';
import { CreateArticle } from './components/CreateArticle';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LoginPage } from './components/LoginPage';
import { ShowArticle } from './components/ShowArticle';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className='font-main'>
          <Routes>
            <Route path='/' element={<ArticleList2 />} />
            <Route path='/articles/:id' element={<ShowArticle />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/articles/create' element={<CreateArticle />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
