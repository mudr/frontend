import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import { hashHistory } from 'react-router';
import cookie from 'js-cookie';
import Dropzone from 'react-dropzone';


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

	
   dropHandler([file]) {
    this.setState({preview: file.preview});
    this.file = file;
  }

	dataHandler(data) {
    console.log('data', data) 

    let formData = new FormData();

    // console.log

    formData.append('avatar', this.file),
    formData.append('email', data.email),
    formData.append('password', data.password),
    formData.append('username', data.username),
    formData.append('mood', data.mood)

    ajax({
    url: 'http://mudr.herokuapp.com/sign_up',
    type: 'POST',
    data: formData,
    dataType: 'application/json',
    processData: false,
    contentType: false
  }).then(() => {
    console.log("sucsess")
    users.push(data.users);
    hashHistory.push('/dashboard');
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
        <h1>Sign Up</h1>
        <SSF onData={::this.dataHandler}>
          <div>
            <input name="username" placeholder="Username" type="text"/>
          </div>
          <div>
            <input name="password" placeholder="Password" type="password"/>
          </div>
          <div>
            <input name="email" placeholder="Email" type="text"/>
          </div>
          <div>
            <input name="mood" placeholder="Mood (1 or 2)" type="number"/>
          </div>

          <div>
            <Dropzone className="dropzone" onDrop={::this.dropHandler}>
              <span>Drop <b>image</b> Here <br/> or click to add</span>
              <input type="hidden" name="photo" value={this.state.preview}/>
              <img src={this.state.preview}/>
            </Dropzone>
          </div>

           <button>Submit</button>
        </SSF>
      </div>
    )
  }

			
	 // <Paper style={style} zDepth={3}/>


// <SSF onData={}>



// </SSF>

			
	}

