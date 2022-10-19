import React from 'react';
import { Container } from 'react-bootstrap';
import CrimePage from './CrimePage';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container data-testid='app-container'>
      <CrimePage />
    </Container>
  );
}

export default App;
