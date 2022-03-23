import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


describe('Calculator renders', () => {
  it('Button √ is present on the screen', () => {
    render(<App />);
    expect(screen.getByText('√')).toBeInTheDocument();
  });
  it('Button 6 is present on the screen', () => {
    render(<App />);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
  it('Button = is present on the screen', () => {
    render(<App />);
    expect(screen.getByText('=')).toBeInTheDocument();
  });
  it('Button C is present on the screen', () => {
    render(<App />);
    expect(screen.getByText('C')).toBeInTheDocument();
  });
});

describe('Keyboard input works', () => {
  it('User input equals display input', () => {
    render(<App />);
    let buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.push(Math.floor(Math.random() * 10));
    }
    buttons.forEach(item => {
      fireEvent.keyUp(document, { key: `${item}` });
    })
    expect(screen.getAllByText(buttons.join())).toBeDefined();
  });
  it('Keyboard inputs calculates correctly', () => {
    render(<App />);
    fireEvent.keyUp(document, { key: '8' });
    fireEvent.keyUp(document, { key: '3' });
    fireEvent.keyUp(document, { key: '+' });
    fireEvent.keyUp(document, { key: '7' });
    fireEvent.keyUp(document, { key: '=' });
    expect(screen.getAllByText('90')).toBeDefined();
  });
})

describe('Mouse input works', () => {
  it('User input equals display input', () => {
    render(<App />);
    let buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.push(Math.floor(Math.random() * 10));
    }
    buttons.forEach(item => {
      fireEvent.click(screen.getByText(item));
    });
    expect(screen.getAllByText(buttons.join())).toBeDefined();
  });
  it('Keyboard inputs calculates correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByText('70')).toBeDefined();
  });
});


