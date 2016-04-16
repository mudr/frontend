import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import MainComponent from './maincomponent';
import Login from './login';
import Leaderboard from './leaderboard';
import StoryBoard from './storyboard';
import Dashboard from './dashboard';
import cookie from 'js-cookie';



function isUserSignedIn() {
  	return !!cookie.get('user');
}

function requireAuth(state, replace) {
  if (!isUserSignedIn()) {
    replace('/login');
  }
}

function loginEnter(state, replace) {
  if (isUserSignedIn()) {
    replace('/');
  }
}





 render((
   <Router history={hashHistory}>
     <Route path="/" component={MainComponent}>
       <IndexRoute component={Login}/>
       <Route path="/dashboard" component={Dashboard}/>
       <Route path="/stories" component={StoryBoard}/>
      </Route>
      	<Route path="/dashboard" component={Dashboard}/>
       <Route path="/submission" component={Submission}/>
       <Route path="/stories" component={Storyboard}/>
      </Router>
 ), document.querySelector('.app'));






