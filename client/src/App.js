import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import './app.css';

// Video: https://www.youtube.com/watch?v=7K9kDrtc4S8
// Code: https://github.com/safak/youtube/tree/react-social-login

const App = () => {
  // Dummy user for testing
  // const user = false;

  const [user, setUser] = useState(null);

  // Function to fetch user after successful authentication
  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('Authentication has failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // Call the function
    getUser();
  }, []);

  console.log(user);
  // console.log(user.displayName);
  // console.log(user.photos[0].value);

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
