import React,{ useState } from 'react';

import './InputElement.scss';

const InputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div >
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <button>Find</button>
      <br/>
      { inputText }
      <hr/><br/>
      <ul>
        {historyList.map(el => {
          return <div>{el}</div>
        })}
      </ul>
    </div>
  )
};

export default InputElement;