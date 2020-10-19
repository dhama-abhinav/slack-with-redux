import { Avatar } from '@material-ui/core'
import React from 'react'
import './Header.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

export const Header = () => {
    const user =useSelector(selectUser)
    return (
        <div className='header'>
            <div className="header__left">
                <Avatar onClick={ ()=> auth.signOut()} src={user.photo} alt='' />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder='Search here' />
            </div>
            <div className="header__right">
                <HelpIcon />
            </div>
        </div>
    )
}
