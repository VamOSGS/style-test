import React from 'react';
import Wrapper from './Wrapper';
import ColorsList from './ColorsList';
import themes from '../colors.json';

const App = () => (
  <Wrapper>
    {Object.entries(themes).map(colorsArr => (
      <ColorsList
        key={colorsArr[0]}
        colorsObj={colorsArr[1]}
        globalColorName={colorsArr[0]}
        globalColorValue={Object.entries(colorsArr[1]).filter(colorArr => colorArr[0] === '500')[0][1]}
      />
    ))}
  </Wrapper>
);

export default App;
