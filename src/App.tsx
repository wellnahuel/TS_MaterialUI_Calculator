import React from 'react';
import { Paper, Container, styled } from "@mui/material";

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  return (
    <div className="App">
      <Container>
        <CalculatorBase elevation={3}>
          Hello World
        </CalculatorBase>
      </Container>
    </div>
  );
}

export default App;
