import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import MainComponent from './maincomponent';
import Login from './login';
import NewUser from './newuser';
import Leaderboard from './leaderboard';
import Storyboard from './storyboard';
import Dashboard from './dashboard';
import cookie from 'js-cookie';
import Submission from './submit';
import Intro from './intro';



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
       <IndexRoute component={Intro}/>
        <Route path="/intro" component={Login}/>
       	<Route path="/newuser" component={NewUser}/>
       	<Route path="/dashboard" component={Dashboard}/>
       	<Route path="/storyboard" component={Storyboard}/>
     	<Route path="/storyboard/:post_id" component={Storyboard}/>
       	<Route path="/submission" component={Submission}/>
       </Route>
    </Router>
 ), document.querySelector('.app'));



	//<Route path="/storyboard" component={Storyboard}/>
	 //<Route path="/dashboard" component={Dashboard}/>

    	//<Route path="/dashboard" component={Dashboard}/>
