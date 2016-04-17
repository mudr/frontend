import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { ajax, ajaxSetup } from 'jquery';
import { Link } from 'react-router';
import Paper from 'material-ui/lib/paper';
import { hashHistory } from 'react-router';
import cookie from 'js-cookie';


// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block'

// }


export default class Login extends Component {
	constructor(...args) {
		super (...args);
		this.state = { users: [] };
	}

  dataHandler(data) {
		// let login = (user, pass) => {
			console.log('loging in');
   		ajax({
       		url: 'http://mudr.herokuapp.com/login',
       		type: 'POST',
       		data: data,
	       	dataType: 'json',
       // cache: false,
       // processData: false,
       // contentType: false
     }).then(resp => {
       // if (data.user === {user.name} && data.password === {user.password}) {

       	console.log('RESP:', resp);

       	if (resp.user) {
	       	// loggedInUser = resp.user;
	        ajaxSetup({
	          headers: {
	        	  'X-Auth-Token': resp.user.auth_token
		       	}
		     	});
				 	cookie.set('user', {user: resp.user});
				 	cookie.set('auth_token', {auth_token: resp.user.auth_token});
			 		hashHistory.replace("/dashboard");
			 	} else {
			 		alert('Please Try Again or Create an Account');
			 	}
			});
  	// }
  }

	//         loggedInUser = resp.user;

	//         ajaxSetup({
	//           headers: {
	//             'X-Access-Token': resp.accss_token
	//           }
	//         })
	//       } else {
	//         // login failed
	//         // do something else
	//       }
	//     });
	// }


		// let logout() {
	 //  	loggedInUser = null;
	 //  	ajaxSetup({
	 //    	headers: {
	 //      	'X-Access-Token': ''
	 //    }
	 //  });
	 //  	renderLogin();

		// dataHandler(data) {
	 //    //users.push(data);
	 //    let config = {
	 //      url: 'http://10.0.0.24:8026/data',
	 //      type: 'POST',
	 //      dataType: 'json',
	 //      contentType : 'application/json',
	 //      processData: false,
	 //      data: JSON.stringify(data)
	 //    }
	 //    ajax(config).then(() => {
	 //      hashHistory.push('/');
	 //    })
	 //  }


	render() {
    return (
      <div className="login-wrapper">
        <h1>Log In</h1>
        <SSF onData={::this.dataHandler}>
          <div>
            <input name="username" placeholder="Username" type="text"/>
          </div>
          <div>
            <input name="password" placeholder="Password" type="password"/>
          </div>
          <div>
            <input name="mood" placeholder="Mood (1-2)" type="number"/>
          </div>
          <button className="login-button-1" type="submit">Sign In</button>
        </SSF>

        <Link to="/newuser"><button className="login-button-2">New Users</button></Link>
        <Link to="/dashboard"><button className="login-button-3">Get Started!</button></Link>

      </div>
    )
  }
	
}

	
	

