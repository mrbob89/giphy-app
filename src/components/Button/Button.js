import React from 'react';
import ButtonAntd from 'antd/lib/button';

import './Button.scss';

function Button({ children, ...other }) {
  return <ButtonAntd {...other}>{children}</ButtonAntd>;
}

export default Button;
