import React from 'react';
import PropTypes from 'prop-types';

const ColorDiv = ({ color, colorName }) => (
  <div style={{ backgroundColor: color }}>
    {`${colorName} ${color}`}
  </div>
);

ColorDiv.propTypes = {
  color: PropTypes.string,
  colorName: PropTypes.string,
};

export default ColorDiv;
