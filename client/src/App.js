import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import './app.css';

// Video: https://www.youtube.com/watch?v=7K9kDrtc4S8
// Code: https://github.com/safak/youtube/tree/react-social-login

const App = () => {
  const user = false;

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/post/:id'
            element={user ? <Post /> : <Navigate to='/login' />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
