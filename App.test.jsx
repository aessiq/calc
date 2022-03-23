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
  it('User ipnut equals display input', () => {
    render(<App />);
    fireEvent.keyUp()
  })
})


