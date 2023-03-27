import React from "react";
import { Link } from "react-router-dom";
import About from "../About/about";
import SearchBar from "../SearchBar";
import styles from "./Nav.module.css"
import Favorites from "../Favorites/Favorites";
import styled from "styled-components";

const Boton = styled.button`
   background-color: #d7ee82;
   color: green;
   border-radius: 5px;
   font-weight: bold;
   font-size: 13px;
   padding: 8px;
   margin: 2px;
   right: 0%;
   `
   export default function Nav (props){
    //console.log(props)
      const handleLogOut = (event) => {
         event.preventDefault()
            props.logout()
      }
      
      return (
         <div>
            <Boton type="submit" onClick={handleLogOut}>Logout</Boton>
            <Link to="/" element={<SearchBar/>}/> 
            <Link to="/home" className={styles.linkAbout}>Home</Link>
            <Link to="/about" element={<About/>} className={styles.linkAbout}>About</Link>
            <Link to="/favorites" element={<Favorites/>} className={styles.linkAbout}>Favoritos</Link>

      <SearchBar
         onSearch={(characterID)=>props.onSearch(characterID)}
      />
      </div>
   )
}