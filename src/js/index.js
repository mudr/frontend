import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';
import MainComponent from './maincomponent';
import Login from './login';



// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={MainComponent}>
//       <IndexRoute component={ViewA}/>
//       <Route path="/murray/:width/:height" component={ViewB}/>
//     </Route>
//     <Route path="/c" component={ViewC}/>
//   </Router>
// ), document.querySelector('.app')