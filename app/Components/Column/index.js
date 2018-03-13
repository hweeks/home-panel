import React from 'react';
import PropTypes from 'prop-types';
import { ColumnContainer } from './styles';

const Column = ({ children }) => (
  <ColumnContainer>
    {children}
  </ColumnContainer>
);

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Column;
