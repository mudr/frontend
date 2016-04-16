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
   		ajax({
       		url: 'http://mudr.herokuapp.com/login',
       		type: 'POST',
       		data: {
	         username: data.user,
	         password: data.pass,
	         mood: data.mood
	       	},
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
	        	  'X-Access-Token': resp.user.access_token
		       	}
		     	});
				 	cookie.set('user', resp.user);
				 	//cookie.set('auth_token', response.user.auth_token);
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
        <h1>Sign In</h1>
        <SSF onData={this.dataHandler}>
          <div>
            <input name="user" placeholder="Username" type="text"/>
          </div>
          <div>
            <input name="pass" placeholder="Password" type="password"/>
          </div>
          <div>
            <input name="mood" placeholder="Mood (1-2)" type="number"/>
          </div>
          <button className="login-button-1">Sign In</button>
        </SSF>

        <Link to="/newuser"><button className="login-button-2">New Users</button></Link>

      </div>
    )
  }
	
}

	
	

