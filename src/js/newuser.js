import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import { hashHistory } from 'react-router';
import cookie from 'js-cookie';


// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// }


export default class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state= { user: [] };
  }

	


	dataHandler(data) {
  console.log(data) 

    let { users } = this.props.params;
    ajax({
    url: 'http://mudr.herokuapp.com/sign_up',
    type: 'POST',
    data: data,
    dataType: 'json',
    processData: false,
    contentType: false
  }).then(() => {
    users.push(data.users);
    hashHistory.push('/');
  })
}
  
	

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
      <div className="newuser-wrapper">
        <h1>Sign In</h1>
        <SSF onData={::
          this.dataHandler}>
          <div>
            <input name="user" placeholder="Username" type="text"/>
          </div>
          <div>
            <input name="pass" placeholder="Password" type="password"/>
          </div>
          <div>
            <input name="email" placeholder="Email" type="text"/>
          </div>
          <div>
            <input name="mood" placeholder="Mood (1-5)" type="number"/>
          </div>
          <div>
            <input name="avatar" placeholder="Photo" type="text"/>
          </div>
          <button>Sign In</button>
        </SSF>
      </div>
    )
  }

			
	 // <Paper style={style} zDepth={3}/>


// <SSF onData={}>



// </SSF>

			
	}

