import React from 'react'
import BoardContainer from './BoardContainer.jsx'
import SelectBox from '../components/SelectBox.jsx'

const GameContainer =function(props){
return (
  <div>
  <SelectBox />
  <BoardContainer />
  </div>
  )
}

export default GameContainer;