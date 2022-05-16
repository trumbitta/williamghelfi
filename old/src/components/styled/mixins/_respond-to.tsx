import { css, SimpleInterpolation } from 'styled-components';

import { breakpoints } from '../_variables';

type UiMediaQueryMixin = {
  [key: string]: (args: TemplateStringsArray) => {};
};

export const respondTo: UiMediaQueryMixin = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css({}, ...args)};
      }
    `;
    return accumulator;
  },
  {} as UiMediaQueryMixin
);
