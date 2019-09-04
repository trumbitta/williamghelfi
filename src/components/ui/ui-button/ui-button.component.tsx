import React, { FunctionComponent } from 'react';

import styled from 'styled-components';
import { darken } from 'polished';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { buttons, colorRoles } from '../../styled/_variables';

export const UiButton: FunctionComponent<UiButtonProps> = props => {
  let innerButton = <>{props.label}</>;

  if (props.icon) {
    innerButton = (
      <>
        <FontAwesomeIcon icon={props.icon} fixedWidth /> {props.label}
      </>
    );
  }

  return <ButtonStyled>{innerButton}</ButtonStyled>;
};

type UiButtonProps = {
  icon: IconDefinition;
  label: string;
};

const ButtonStyled = styled.button`
  display: inline-block;
  background: ${buttons.defaultColorBackground};
  color: ${buttons.defaultColorForeground};
  font-size: ${buttons.sizes.base.fontSize};
  margin: 0;
  padding: 0.25em;
  border: 1px solid ${buttons.defaultColorForeground};
  border-radius: ${buttons.sizes.base.borderRadius};
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: ${darken(0.2, buttons.defaultColorBackground)};
    border-color: ${darken(0.2, buttons.defaultColorBackground)}
    box-shadow: 0 0 0 0.2rem ${colorRoles.light};
  }
`;
