import React from 'react'
import Board from '../components/Board.jsx'

class BoardContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [
      {
        inPlay: true,
        name: 'Helen',
        gender: 'female',
        glasses: 'yes',
        hair_colour: 'black',
      },
      {
        inPlay: true,
        name: 'Bill',
        gender: 'male',
        glasses: 'yes',
        hair_colour: 'brown',
      },
      {
        inPlay: true,
        name: 'Maria',
        gender: 'female',
        glasses: 'yes',
        hair_colour: 'blonde',
      },
      {
        inPlay: true,
        name: 'Ted',
        gender: 'male',
        glasses: 'no',
        hair_colour: 'black',
      },
      {
        inPlay: true,
        name: 'Betty',
        gender: 'female',
        glasses: 'no',
        hair_colour: 'brown',
      },
      {
        inPlay: true,
        name: 'Jim',
        gender: 'male',
        glasses: 'no',
        hair_colour: 'blonde',
      },

      ],
    }
  }

  render() {
    return (
      <div>
      <Board list={this.state.list} />
      </div>
      )
  }
}


export default BoardContainer;
