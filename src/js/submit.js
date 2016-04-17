import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import cookie from 'js-cookie';
  
  
  
 	let currentuser = cookie.getJSON('user');
  	let currentAT = cookie.getJSON('auth_token');
 export default class Submission extends Component {
 	constructor (...args) {
 		super(...args);
 		this.state = {post: [] }
 	}

 	//componentWillMount() {}
 	
  
 	
 	dataHandler(data) {
	 	// onData() write Dat function
	 	console.log(data);
	 	// //let { post_id } = this.props.params;
	 	// let formData = new FormData();

	 	// formData.append('title', this.title),
	 	// formData.append('content', this.content)

	 	console.log('ppppp');
	  
		ajax({
    		url: 'http:mudr.herokuapp.com/posts/create',
    		type: 'POST',
    		data: data,
       		dataType: 'aplication/json',
       		headers: {
        	  'X-Auth-Token': currentAT.auth_token
	       	}
		}).then(() => {
    		console.log(ffff)
    		hashHistory.push('/storyboard');
    	});
 	}

 	render(){
 		return(
 				<div className="submit-wrapper">
 			 	<img className="sad-img" src="http://images.clipartpanda.com/animated-rain-clouds-raincloud.gif" alt="sad gif"/>
 			 <div className="submit-story-wrapper">
        		<h1>Share Your Story</h1>
  
         		<SSF onData={::this.dataHandler}>
 
         			<div className="submit-title">
            			 <input name="title" placeholder="title of your story" type="text"/>
          			</div>
 
           			<div className="submit-content">
            			 <input name="content" placeholder="tell us whatsup" type="text"/>
          			</div>
         
          		 <button>Submit Your Story</button>
 
        		 </SSF>
 
 
      		 </div>
      		</div>
 
 
 
 			)
 	}
  }
//.auth_token
