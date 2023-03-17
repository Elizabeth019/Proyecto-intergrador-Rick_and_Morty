import styled from "styled-components";
import { Link } from "react-router-dom";

const DivCar = styled.div`
   display: inline-block;
   border: outset;
   border-radius: 30px ;
   overflow: hidden;
   margin: 25px;
   background-color: beige;
   height: 5%;
   `
const Button = styled.button`
  position: relative;
  right: -100px;
  border-radius: 20px;
  background-color: black;
  color: white;
`

export default function Card(props) {
   console.log(props.onClose)
   return (
   <Link to={`/detail/${props.id}`}>
         <Button onClick={props.onClose}>X</Button>
      <DivCar>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="imag not found" />
      </DivCar>
   </Link>
   );
}
