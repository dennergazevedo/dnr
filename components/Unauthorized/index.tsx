import React from 'react';
import { signIn } from "next-auth/react";

import { Container } from './styles';

function Unauthorized() {
  return (
    <Container>
      <h1>401</h1>
      <h3>Não autorizado.</h3>
      <button onClick={() => signIn()}>Login</button>
    </Container>
  )
}

export default Unauthorized;
