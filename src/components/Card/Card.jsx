import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { favoritos, remove } from "../../redux/action"
import { useState, useEffect } from "react";

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
   right: -110px;
   border-radius: 20px;
   background-color: black;
   color: white;
`
const BotonFav = styled.button`
   position: relative;
   left: -110px;
   margin: 5px;
   border: none;
   background: none;
`

function Card(props) {
   //console.log("props")
   const [isFav, setIsFav] = useState(false);
  // const { id, favoritos, remove, myFavorites } = props 

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         props.remove(props.id)
      } else {
         props.favoritos(props)
      }
   }
   
   useEffect(() => {
      //const fav = props.myFavorites
     // for (let i = 0; i < fav; i++){
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props]);

   return (
      <DivCar>
      {
         isFav ? (
            <BotonFav onClick={handleFavorite}>❤️</BotonFav>
         ) : (
            <BotonFav onClick={handleFavorite}>🤍</BotonFav>
         )
      }
      <Button onClick={props.onClose}>X</Button>
            <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="imag not found" />
   </Link>
      </DivCar>
   );
}

const mapDispatchToProps = (dispatch) => {
      return {
         favoritos:(character)=>{ 
            dispatch(favoritos(character))},
         remove:(id)=>{ 
            dispatch(remove(id))}
      }
}

const mapStateToProps = (state) => {
      return {
         myFavorites: state.myFavorites
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)