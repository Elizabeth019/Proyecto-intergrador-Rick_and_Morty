import React from "react";
import { Link } from "react-router-dom";
import About from "../About/about";
import SearchBar from "../SearchBar";
import styles from "./Nav.module.css"
import Form from "../Form/Form";

export default function Nav (props){
   //console.log(props)
   return (
      <div>
         <Link to="/" className={styles.linkAbout}>Home</Link>
         <Link to="/about" element={<About/>} className={styles.linkAbout}>About</Link>
     <SearchBar
         onSearch={(characterID)=>props.onSearch(characterID)}
        />
        <Link to="/" element={<Form/>}/>
    </div>
 )
}