import React from 'react';
import Card from './Card';


export default function Cards(props) {
   const { characters } = props;
   return (
   <div style={{display: 'flex', justifyContent: 'space-around', borderRadius:'20px'}}>
         {characters.map(character =>
           <Card key = {character.name}
           name = {character.name}
           species = {character.species}
           gender = {character.gender}
           image = {character.image}
           onClose={() => window.alert('Emulamos que se cierra la card')}
           />
          )}
           
   </div>
   );
}
