import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ApiProps {}

const StyledApi = styled.div`
  color: pink;
`;

export function Api(props: ApiProps) {
  return (
    <StyledApi>
      <h1>Welcome to api!</h1>
    </StyledApi>
  );
}

export default Api;
