import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './Color';

const ColorsListDiv = ({ colors, className }) => (
  <div className={className}>
    {colors.map(color => <Color key={color} color={color} />)}
  </div>
);

ColorsListDiv.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

const ColorsList = styled(ColorsListDiv)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(50px, auto);
`;

export default ColorsList;
