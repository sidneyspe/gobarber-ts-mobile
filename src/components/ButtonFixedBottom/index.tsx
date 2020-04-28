import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, Icon } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon: string;
}

const ButtonFixedBottom: React.FC<ButtonProps> = ({
  icon,
  children,
  ...rest
}) => (
  <Container {...rest}>
    <Icon name={icon} size={20} color="#ff9000" />

    <ButtonText>{children}</ButtonText>
  </Container>
);

export default ButtonFixedBottom;
