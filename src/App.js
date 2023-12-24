// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeroPage from './components/HeroPage'; // Adjust the path based on your project structure
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// import Page4 from './components/Page4';

const App = () => {
  return (
    <Router>
      <div>
        {/* Your navigation header (HeroPage) */}
        <HeroPage />

        {/* Your page routes */}
        {/* <Switch> */}
          {/* <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
};

export default App;
