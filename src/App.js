import GlobalStyles from './global-style';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const DarkTheme = {
  color: '#fff',
  background: '#222',
};

const BaseTheme = {
  color: '#222',
  background: '#fff',
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!baseTheme);
  };

  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles></GlobalStyles>
      <Container>
        <h1>Hello World</h1>
        <button className='btn' onClick={toggleTheme}>
          toggle me
        </button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
