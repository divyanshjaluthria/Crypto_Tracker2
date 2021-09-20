import './App.css';
import React from 'react';
import { Switch,  Route } from 'react-router-dom'
import Home from './Components/Home';
import Allprices from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
// import Page4 from './Components/Page4'
// import Page5 from './Components/Page5';
// import Page6 from './Components/Page6'



function App() {

  return (<><Switch>

    <Route path="/" component={Home} exact/>
    <Route path="/page1" component={Allprices}/>
    <Route path="/page2" component={Page2}/>
    <Route path="/page3" component={Page3}/>
    {/* <Route path="/page4" component={Page4}/> */}
    {/* <Route path="/page5" component={Page5}/> */}
    {/* <Route path="/page6" component={Page6}/> */}

  </Switch>

  </>

  );
}

export default App;
