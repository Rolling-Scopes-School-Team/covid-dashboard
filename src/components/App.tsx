import React from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const App = (): JSX.Element => (
  <React.Fragment>
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
);

export default App;
