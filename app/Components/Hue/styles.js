import styled from 'styled-components';
import { ColumnContainer } from '../Column/styles';

export const LightsContainer = ColumnContainer.extend`
  padding: 16px;
`;

export const LightButton = styled.button`
  border: 2px solid white;
  color: white;
  background: black;
  border-radius: 4px;
  padding: 8px;
  font-size: 20px;
`;
