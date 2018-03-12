import React from 'react';
import PropTypes from 'prop-types';
import { RowContainer } from './styles';

const Row = ({ children }) => (
  <RowContainer>
    {children}
  </RowContainer>
);

Row.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Row;
