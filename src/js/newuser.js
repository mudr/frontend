import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import { hashHistory } from 'react-router';
import cookie from 'js-cookie';


const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',


export default class Login extends Component {
	


	dataHandler(data) {
    let { info } = this.props.params;
    info.push(data.info);
    hashHistory.push('/');
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
      <div>
        <h1>Sign In</h1>
        <SerialForm onData={::
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
            <input name="img" placeholder="Photo" type="text"/>
          </div>
          <button>Sign In</button>
        </SerialForm>
      </div>
    )
  }

			
	 // <Paper style={style} zDepth={3}/>


// <SSF onData={}>



// </SSF>

			)
	}
}
