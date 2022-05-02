import React from 'react';

import Icon from '@material-ui/core/Icon';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import * as Style from './style';

const Header = () => (
  <Style.Header>
    <div>
      <Icon>
        <Logo />
      </Icon>
    </div>
  </Style.Header>
);

export default Header;
