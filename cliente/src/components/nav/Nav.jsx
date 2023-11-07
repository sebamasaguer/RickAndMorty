import React from "react";
//import { useState } from 'react';
import SearchBar from "../searchbar/SearchBar";
import styled from "./nav.module.css";
import {NavLink} from 'react-router-dom';
//import About from './about/About.jsx';

const Nav = ({onSearch},{logout}) => {
    //const [id, setId] = useState('');
    return ( 
       <div className={styled.container}>
        
        <div className={styled.navlink}>
<NavLink to={'/Home'} className={styled.link}>Home</NavLink> 
<NavLink to={'/about'} className={styled.link}>About</NavLink>
<NavLink to={'/favorites'} className={styled.link}>Favorites</NavLink>
<NavLink to={'/'} className={styled.link} logout={logout} >Logout</NavLink>
</div>
<SearchBar className={styled.search} onSearch={onSearch} />
      </div>
       )
  }
  
  export default Nav