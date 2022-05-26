// Third parties
import { lighten, desaturate, darken } from 'polished';

const baseColors = {
  black: 'hsla(0, 0%, 0%, 0.9)',
  purple: '#663399',
  gray: '#f8f9fa',
  gray2: '#eeeeee',
};

export const colors = {
  dark: baseColors.black,
  primary: baseColors.purple,
  secondary: lighten(0.2, desaturate(0.5, baseColors.purple)),
  deaccent: darken(0.2, baseColors.purple),
  accent: lighten(0.1, baseColors.purple),
  light: baseColors.gray,
};
