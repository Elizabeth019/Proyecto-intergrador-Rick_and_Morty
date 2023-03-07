import styled from "styled-components";

const StyleInput = styled.input`
   margin-right: 5px;
   padding: 5px;
   border-radius: 5px;
`
const Boton = styled.button`
   background-color: #d7ee82;
   color: green;
   border-radius: 5px;
   font-weight: bold;
   font-size: 15px;
   padding: 5px;
   margin: 5px;
   ;
`

export default function SearchBar(props) {
   return (
      <div style={{display: "flex", justifyContent: "flex-end"}}>
         <StyleInput type='search'/>
      <Boton onClick={() => props.onSearch()}>Agregar</Boton>
      </div>
   );
}
