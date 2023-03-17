import React, { useState } from "react";
import styled from "styled-components";
import onSearch from "../App";

const StyleInput = styled.input`
   margin-right: 1px;
   
   border-radius: 5px;
`
const Boton = styled.button`
   background-color: #d7ee82;
   color: green;
   border-radius: 5px;
   font-weight: bold;
   font-size: 13px;
   padding: 1px;
   margin: 2px;
   ;
`

export default function SearchBar(props) {
   //console.log(props)
   const [id, setId] = useState("")
   
   const InputChange = (event) => {
     // const value = event.target;
      setId(event.target.value)
   }
   return (
      <div style={{display: "grid", justifyContent: "flex-end", padding: "5px", border: "solid" }}>
         <StyleInput type='text' onChange={InputChange}/>
      <Boton onClick={() =>props.onSearch(id)} >Agregar</Boton>
      </div>
   );
}
