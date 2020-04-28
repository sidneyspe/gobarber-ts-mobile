import React from 'react';

import { Container, Loading } from './styles';

interface ButtonProps {
  children?: string;
}

const LoadingPage: React.FC<ButtonProps> = ({ ...rest }) => (
  <Container {...rest}>
    <Loading size="large" color="#999" />
  </Container>
);

export default LoadingPage;
