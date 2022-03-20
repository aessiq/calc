import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [history, setHistory] = useState<string>('');
  const [currentInput, setCurrentInput] = useState<string>('');
  const operations: string[] = ['+', '-', '*', '/'];
  const allButtons: string[] = ['C', '√', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', ',', '='];

  const clearDisplay = (): void => {
    setHistory('');
    setCurrentInput('');
  }

  const handleCalc = (value: string): void => {
    if (currentInput.length === 0 &&
      (value == '00' || value == '0' || value == ',' || operations.includes(value))) {
      return
    }

    if (operations.includes(history.slice(-1)) && operations.includes(value)) {
      return
    }

    if (value == 'C') {
      clearDisplay();
      return
    }

    if (operations.includes(value)) {
      setHistory(history + value);
      setCurrentInput(' ');
      return
    }

    if (value == '=') {
      if (history.length === 0) return;
      const stringToCalc = history.replace(/,/igm, '.');
      setCurrentInput(eval(stringToCalc));
      return
    }

    if (value == '%') {
      const symbolsToReplace = currentInput.length - 1;
      setHistory(history.slice(0, -symbolsToReplace) + (+currentInput * 0.01));
      setCurrentInput(String(+currentInput * 0.01));
      return;
    }

    if (value == '√') {
      const symbolsToReplace = currentInput.length - 1;
      setHistory(history.slice(0, -symbolsToReplace) + Math.sqrt(+currentInput));
      setCurrentInput(String(Math.sqrt(+currentInput)));
      return
    }

    setHistory(history + value);
    setCurrentInput(currentInput + value);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    let pressedValue = event.key;
    if (event.key == 'Enter') pressedValue = '=';
    if (!allButtons.includes(pressedValue)) return;
    handleCalc(pressedValue);
  }

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement;
    const clickedValue: string = target.textContent;
    handleCalc(clickedValue);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="calculator">
      <div className="display">
        <p className="history">{history}</p>
        <p className="currentInput">{currentInput}</p>
      </div>
      <div className="buttons">
        {allButtons.map((item, index) => {
          return <button key={index} className="button" onClick={(e) => handleClick(e)}>{item}</button>
        })}
      </div>
    </div>
  )
}

export default App;