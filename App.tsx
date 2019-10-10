import React from 'react';
import { StatusBar } from 'react-native';

import Modules from './app/Modules';

const App = () => {
  StatusBar.setHidden(true);

  return (
    <Modules />
  );
}

export default App;
