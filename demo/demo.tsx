/**
 * Pink Pixel VSCode Candy Themes Demo File 💖
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Type definitions showcase yellow/gold tones
interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
}

// Constants showcase pink/red tones
const MAGIC_NUMBER = 42;
const PI_VALUE = 3.14159;
const IS_AWESOME = true;

// String showcase - green/lime tones
const welcomeMessage = "Welcome to Pink Pixel Themes! 🌈";
const tagline = 'Dream it, Pixel it';

/**
 * Functions showcase cyan/blue tones
 * This component demonstrates the theme colors
 */
export const ThemeDemo: React.FC = () => {
  // Variables use foreground color
  const [counter, setCounter] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  // Keywords showcase purple/magenta
  useEffect(() => {
    console.log(`Counter value: ${counter}`);

    if (counter > MAGIC_NUMBER) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [counter]);

  // Arrow functions and methods
  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  const calculateScore = (base: number, multiplier: number): number => {
    return base * multiplier * PI_VALUE;
  };

  return (
    <div className="theme-demo">
      <h1>{welcomeMessage}</h1>
      <p className="subtitle">{tagline}</p>

      <button onClick={handleClick}>
        Click Count: {counter}
      </button>

      {isActive && (
        <div className="active-indicator">
          🎉 You reached the magic number!
        </div>
      )}
    </div>
  );
};

// Class definition
class ColorPalette {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
  }

  getRandomColor(): string {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }
}

// Export default
export default ThemeDemo;

/*
  TODO: Add more theme features
  FIXME: Optimize performance
  NOTE: This is just a demo showcase
*/
