import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const history = useNavigate()
    const showProfile =()=>{
        history("/profile");
    }
  return (
    <div className='header'>
      <div className='contentHeader'>
        <span className='quite'>Winner never Quite,Quiters never win!!</span>
        <span className='profile'>
            <button className='profileButton' onClick={showProfile}>Profile</button>
        </span>
      </div>
    </div>
  )
}

export default Header
