import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorDiv = ({ color, className }) => (
  <div className={className}>
    {color}
  </div>
);

ColorDiv.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

const Color = styled(ColorDiv)`
  background-color: ${props => props.color || '#ddd'};
`;

export default Color;
