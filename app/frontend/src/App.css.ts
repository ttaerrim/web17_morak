import { style, globalStyle, globalKeyframes } from '@vanilla-extract/css';

import { vars } from './styles/theme.css';

globalStyle('#root', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});

const logoSpin = 'logo-spin';

globalKeyframes(logoSpin, {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const logo = style({
  willChange: 'filter',
  height: '6em',
  padding: '1.5em',
  transition: 'filter 300ms',

  selectors: {
    '&:hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)',
    },
  },
});

export const rotateLogo = style({
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animation: `${logoSpin} infinite 20s linear`,
    },
  },
  selectors: {
    '&:hover': {
      filter: 'drop-shadow(0 0 2em #61dafbaa)',
    },
  },
});

export const card = style({
  padding: '2em',
});

export const reactTheDocs = style({
  color: '#888',
});

export const spin = style({
  animation: `${logoSpin} infinite 20s linear`,
});

export const themeText = style({
  color: vars.color.morakGreen,
  backgroundColor: vars.color.grayscale50,
  fontFamily: vars.font.pretendardRegular,
});
