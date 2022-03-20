import React, { useState } from 'react';

const App: React.FC = () => {
  const [history, setHistory] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const operations = ['+', '-', '*', '/'];

  const clearDisplay = () => {
    setHistory('');
    setCurrentInput('');
  }

  const handleClick = (e) => {
    const clickedValue = e.target.textContent;

    if (currentInput.length === 0 &&
      (clickedValue == '00' || clickedValue == '0' || clickedValue == ',' || operations.includes(clickedValue))) {
      return
    }

    if (operations.includes(history.slice(-1)) && operations.includes(clickedValue)) {
      return
    }

    if (clickedValue == 'C') {
      clearDisplay();
      return
    }

    if (operations.includes(clickedValue)) {
      setHistory(history + clickedValue);
      setCurrentInput(' ');
      return
    }

    if (clickedValue == '=') {
      const stringToCalc = history.replace(/,/igm, '.');
      setCurrentInput(eval(stringToCalc));
      return
    }

    if (clickedValue == '%') {
      const symbolsToReplace = currentInput.length;
      setHistory(history.slice(0, -symbolsToReplace) + (currentInput * 0.01));
      setCurrentInput(+currentInput * 0.01);
      return;
    }

    if (clickedValue == '√') {
      const symbolsToReplace = currentInput.length;
      setHistory(history.slice(0, -symbolsToReplace) + Math.sqrt(currentInput));
      setCurrentInput(Math.sqrt(currentInput));
      return
    }

    setHistory(history + clickedValue);
    setCurrentInput(currentInput + clickedValue);
  }


  return (
    <div className="calculator">
      <div className="display">
        <p className="history">{history}</p>
        <p className="currentInput">{currentInput}</p>
      </div>
      <div className="buttons">
        <button className='button' onClick={(e) => handleClick(e)}>C</button>
        <button className='button' onClick={(e) => handleClick(e)}>√</button>
        <button className='button' onClick={(e) => handleClick(e)}>%</button>
        <button className='button' onClick={(e) => handleClick(e)}>/</button>
        <button className='button' onClick={(e) => handleClick(e)}>7</button>
        <button className='button' onClick={(e) => handleClick(e)}>8</button>
        <button className='button' onClick={(e) => handleClick(e)}>9</button>
        <button className='button' onClick={(e) => handleClick(e)}>*</button>
        <button className='button' onClick={(e) => handleClick(e)}>4</button>
        <button className='button' onClick={(e) => handleClick(e)}>5</button>
        <button className='button' onClick={(e) => handleClick(e)}>6</button>
        <button className='button' onClick={(e) => handleClick(e)}>-</button>
        <button className='button' onClick={(e) => handleClick(e)}>1</button>
        <button className='button' onClick={(e) => handleClick(e)}>2</button>
        <button className='button' onClick={(e) => handleClick(e)}>3</button>
        <button className='button' onClick={(e) => handleClick(e)}>+</button>
        <button className='button' onClick={(e) => handleClick(e)}>00</button>
        <button className='button' onClick={(e) => handleClick(e)}>0</button>
        <button className='button' onClick={(e) => handleClick(e)}>,</button>
        <button className='button' onClick={(e) => handleClick(e)}>=</button>
      </div>
    </div>
  )
}

export default App;