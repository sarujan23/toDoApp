import React from 'react'
import './NavBar.css'
// import  '../image/saru.jpg'
import { FaBell,FaAngleDown } from 'react-icons/fa';


const ProfilePhoto = ({ imageUrl }) => {
    return <img src={imageUrl} alt="Profile" className="profile-photo" />;
  };

  
    

function NavBar() {
    
  return (
    <div>
    <div className="navbar">
      <h1>Dashboard</h1>
      <FaBell className="bell-icon" />
      <ProfilePhoto imageUrl="https://avatars.githubusercontent.com/u/103638279?s=96&v=4" />
      <FaAngleDown className="dropdown-icon" />
      
    </div>  
        
    </div>
  )
}

export default NavBar
