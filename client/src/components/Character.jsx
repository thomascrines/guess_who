import React from 'react';

const Character = function(props) {
    return(
      <div id="character">
      <p>
      Name: {props.name} <br /> 
      Gender: {props.gender} <br /> 
      Glasses: {props.glasses} <br /> 
      Hair Colour: {props.hair_colour} <br /> 
      </p>
      </div>
    )
  }

export default Character;
