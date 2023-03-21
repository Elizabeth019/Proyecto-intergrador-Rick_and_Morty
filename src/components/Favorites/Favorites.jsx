import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites ({ myFavorites }){
    return (
        <div>
            {myFavorites.map(fav =>
            <Card 
            id= {fav.id}
            key = {fav.name}
            name = {fav.name}
            species = {fav.species}
            gender = {fav.gender}
            image = {fav.image}
            />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);