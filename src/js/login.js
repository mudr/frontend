import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from './react-simple-serial-form';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';


const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',


export default class Login extends Component {
	// constructor () {
	// 	super ()
	// 	this.state = {user: []}
	// }
	

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


	render(){
		return(
			
		<div classname="login-wrapper">
			<SSF onData={this.dataHandler}>
          <div>
            <label>
              Fullname:
              <input type="text" name="name"/>
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email"/>
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input type="tel" name="phone"/>
            </label>
          </div>
          <button>Submit</button>
        </SSF>
       </div>

			
	 // <Paper style={style} zDepth={3}/>


// <SSF onData={}>



// </SSF>

			)
	}
}
