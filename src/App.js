//
//

import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

//tyles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className=''>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
