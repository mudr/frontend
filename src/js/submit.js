import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';


// title, content

export default class Submission extends Component {
	let currentuser = cookie.getJSON('user');

	  dataHandler(data) {


   		ajax({
       		url: 'http://mudr.herokuapp.com/posts/create',
       		type: 'POST',
       		data: data,
	       	dataType: 'json',
	       	headers: {
	        	  'X-Access-Token': currentuser.auth_token
		       	}

	     }).then( () => {
	     	hashHistory.replace("/storyboard");

	     });
  }


	render(){
		return(
			 <div className="submit-story-wrapper">
        		<h1>Share Your Story</h1>

        		<SSF onData={this.dataHandler}>

        			<div className="submit-title">
           			 <input name="title" placeholder="title of your story" type="text"/>
         			</div>

          			<div className="submit-content">
           			 <input name="content" placeholder="tell us whatsup" type="text"/>
         			</div>
        
         		 <button>Submit Your Story</button>

       		   </SSF>


     		 </div>



			)
	}
}
