import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './Color';

const ColorsListDiv = ({
  colorsObj, globalColorName, globalColorValue, className,
}) => (
  <div className={className}>
    <Color key={globalColorValue} colorName={globalColorName} color={globalColorValue} />
    {Object.entries(colorsObj).map(colorData => (
      <Color key={colorData[1]} colorName={colorData[0]} color={colorData[1]} />
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
  grid-auto-rows: minmax(54px, auto);
`;

export default ColorsList;
