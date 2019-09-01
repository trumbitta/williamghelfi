export type UiBreakpointMap = {
  [key: string]: string;
};

export const breakpoints: UiBreakpointMap = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const grid = {
  gutterWidth: 30, // px
};

export const container = {
  paddingX: `${grid.gutterWidth / 2}px`,
  maxWidths: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
};

export const rhythmBase = 1.78;

export const rhythm = {
  0: `0`,
  1: `${rhythmBase * 0.25}rem`,
  2: `${rhythmBase * 0.5}rem`,
  3: `${rhythmBase}rem`,
  4: `${rhythmBase * 1.5}rem`,
  5: `${rhythmBase * 3}rem`,
};

export const colors = {
  black: 'hsla(0, 0%, 0%, 0.9)',
};

export const fonts = {
  weights: {
    normal: 300,
    bold: 700,
  },
  sizes: {
    base: '1rem',
    small: '0.8rem',
  },
};

export const headings = {
  font: {
    family: '"Open Sans", sans-serif',
    size: {
      h1: '2.2974rem',
      h2: '1.51572rem',
      h3: '1.31951rem',
      h4: '1rem',
      h5: '0.87055rem',
      h6: '0.81225rem',
    },
    lineHeight: {
      h1: rhythm[4],
      h2: rhythm[3],
      h3: rhythm[3],
      h4: rhythm[3],
      h5: rhythm[3],
      h6: rhythm[3],
    },
    color: colors.black,
    weight: fonts.weights.bold,
  },
  margin: {
    top: rhythm[5],
    bottom: rhythm[3],
  },
};
