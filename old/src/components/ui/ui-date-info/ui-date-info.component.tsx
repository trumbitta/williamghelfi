import React, { FunctionComponent } from 'react';

import TimeAgo from 'react-timeago';
import styled from 'styled-components';

import { colorRoles } from '../../styled/_variables';

export const UiDateInfo: FunctionComponent<{ date: string }> = props => (
  <TimeAgoStyled date={props.date}></TimeAgoStyled>
);

export const TimeAgoStyled = styled(TimeAgo)`
  color: ${colorRoles.secondary};
  display: block;
`;
