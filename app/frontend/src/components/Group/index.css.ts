import { style } from '@vanilla-extract/css';

import { vars } from '@/styles';
import { sansBold16, sansBold20, sansRegular16 } from '@/styles/font.css';

const {
  grayscale50,
  grayscale100,
  grayscale200,
  grayscale400,
  grayscaleWhite,
  grayscaleBlack,
} = vars.color;

export const code = style([
  sansBold16,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: grayscale200,
  },
]);

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.8rem',
  border: `1px solid ${grayscale200}`,
  backgroundColor: grayscaleWhite,
  padding: '2rem',
  gap: '0.8rem',
  cursor: 'pointer',

  selectors: {
    [`&:hover`]: {
      backgroundColor: grayscale50,
    },
  },
});

export const copyButton = style({
  display: 'flex',
  padding: '0.4rem',
  borderRadius: '50%',

  ':hover': {
    background: grayscale100,
  },
});

export const count = style([
  sansRegular16,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: grayscale400,
  },
]);

export const detail = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const groupCode = style({
  marginLeft: '0.4rem',
});

export const info = style({
  display: 'flex',
  gap: '0.8rem',
  minWidth: 0,
});

export const title = style([
  sansBold20,
  {
    color: grayscaleBlack,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.8rem',
});
