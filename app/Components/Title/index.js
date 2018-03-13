import React from 'react';
import PropTypes from 'prop-types';
import { TitleContainer } from './styles';

const Title = ({ children }) => (
  <TitleContainer>
    {children}
  </TitleContainer>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
