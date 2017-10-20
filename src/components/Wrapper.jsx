import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperDiv = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

WrapperDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Wrapper = styled(WrapperDiv)`
  max-width: 1024px;
  padding: 15px;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  grid-row-gap: 30px;
  justify-items: stretch;
`;

export default Wrapper;
