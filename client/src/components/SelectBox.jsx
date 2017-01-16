import React from 'react';

const SelectBox = (props) => {
  return (
    <div className="select-box">
    <p>Select Question: </p>
    <select className="question-select">
    <option value='1'>Does your character have glasses?</option>
    <option value='2'>Is your character male?</option>
    <option value='3'>Does your character have black hair?</option>
    <option value='4'>Does your character have brown hair?</option>
    <option value='5'>Does your character have blonde hair?</option>
    </select>
    <button className="guess-button">Ask</button>
    </div>
    )
}

export default SelectBox;

// import React from 'react';

// const SelectBox = (props) => {
//   return (
//     <div className="select-box">
//     <p>Select Question: </p>
//     <select className="question-select">
    
//      {props.questionList.map((question, index) => {
//     <option value={index}>{question}</option>
//     })}

//     </select>
//     <button className="guess-button">Ask</button>
//     </div>

//     )
// }

// export default SelectBox;