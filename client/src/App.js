import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import './app.css';

// Video: https://www.youtube.com/watch?v=7K9kDrtc4S8
// Code: https://github.com/safak/youtube/tree/react-social-login

const App = () => {
  return (
    <div>
      <Navbar />
      <Post />
    </div>
  );
};

export default App;
