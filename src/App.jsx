
import './App.css'
import Button from 'react-bootstrap/Button';
import PostList from './components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        <h1 className='header-text'>Arun's Blog</h1>
        <div>
          <Button>Add post</Button>
        </div>
      </div>
      <hr className='divider' />
      <PostList />
    </>
  )
}

export default App;
