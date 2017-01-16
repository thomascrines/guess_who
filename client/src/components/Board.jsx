import React from 'react';
import Character from './Character.jsx';

const Board = (props) => {
  return (
    <div>
      {props.list.map((character, index) => {
          return <Character
          key={index}
          name={character.name}
          gender={character.gender}
          glasses={character.glasses}
          hair_colour={character.hair_colour}
          />
        })}
    </div>
  )
}

export default Board;
