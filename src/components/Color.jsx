import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorDiv = ({ color, colorName, className }) => {
  const colorRGB = chroma(color).rgb();
  const textColor = colorRGB[0] + colorRGB[1] + colorRGB[2] > 3 * 128 ? 'black' : 'white';
  return (
    <CopyToClipboard text={color}>
      <div className={className} style={{ backgroundColor: color, color: textColor }}>
        <div>
          {colorName}
        </div>
        <div style={{ justifySelf: 'end' }}>
          {color}
        </div>
      </div>
    </CopyToClipboard>
  );
};

ColorDiv.propTypes = {
  color: PropTypes.string,
  colorName: PropTypes.string,
  className: PropTypes.string,
};

const Color = styled(ColorDiv)`
  display:grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  :hover {
    z-index: 100;
    transform: scale(1.1);
    box-shadow: 0px 5px 5px rgba(68,68,68,0.4);
  }
`;

export default Color;
