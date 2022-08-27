import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <div className='navbar'>
      <span className='logo'>
        <Link className='link' to='/'>
          Passport App
        </Link>
      </span>
      {user ? (
        <ul className='list'>
          <li className='listItem'>
            <img
              src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              className='avatar'
            />
          </li>
          <li className='listItem'>Jane Doe</li>
          <li className='listItem'>Logout</li>
        </ul>
      ) : (
        <Link className='link' to='/login'>
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
