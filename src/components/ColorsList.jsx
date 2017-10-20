import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './Color';

const ColorsListDiv = ({
  colorsObj, globalColorName, globalColorValue, className,
}) => (
  <div className={className}>
    <Color key={globalColorValue} colorName={globalColorName} color={globalColorValue.toUpperCase()} />
    {Object.entries(colorsObj).map(colorData => (
      <Color key={colorData[1]} colorName={colorData[0]} color={colorData[1].toUpperCase()} />
    ))}
  </div>
);

ColorsListDiv.propTypes = {
  colorsObj: PropTypes.objectOf(PropTypes.string),
  globalColorName: PropTypes.string,
  globalColorValue: PropTypes.string,
  className: PropTypes.string,
};

const ColorsList = styled(ColorsListDiv)`
  display: grid;
  box-shadow: 0px 0px 5px rgba(68, 68, 68, 0.3);
  grid-auto-rows: minmax(54px, auto);
`;

export default ColorsList;
