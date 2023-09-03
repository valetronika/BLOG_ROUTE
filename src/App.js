import './App.css';
import{Routes, Route} from 'react-router-dom'
import Work from './pages/Work/Work';
import Blog from './pages/Blog/Blog';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Layout from './pages/Layout';
import WorkItemPage from './pages/WorkItemPage/WorkItemPage';
function App() {

  return (
    <>
      <main className='container'>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/works' element={<Work/>}/>
                <Route path='/works/:id' element={<WorkItemPage/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>

      </main>

    </>
  );
}

export default App;
