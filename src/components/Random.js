import React from 'react';
import styled from 'styled-components';

const Random = () => {
  return (
    <Wrapper>
      <div className='underline'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.5rem;
    background: red;
    margin: 4rem auto;
  }
`;

export default Random;
