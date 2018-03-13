import React from 'react';
import PropTypes from 'prop-types';
import { RowContainer } from './styles';

const Row = ({ children }) => (
  <RowContainer>
    {children}
  </RowContainer>
);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Row;
