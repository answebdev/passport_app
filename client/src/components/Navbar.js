import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Passport App</span>
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
    </div>
  );
};

export default Navbar;
