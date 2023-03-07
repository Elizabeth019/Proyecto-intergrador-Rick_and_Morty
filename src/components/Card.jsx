import styled from "styled-components";
const DivCar = styled.div`
   display: inline-block;
   border: outset;
   border-radius: 30px ;
   overflow: hidden;
   margin: 25px;
   background-color: beige;
   height: 5%;
   box-shadow: 5px 10px 20px 1px rgba(255 , 255, 255, 0.2) !important;
   transition: 2s,  2s, transform 2s
   `

export default function Card(props) {
   return (
      <DivCar>
         <button onClick={() => props.onClose()}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="imag not found" />
      </DivCar>
   );
}
