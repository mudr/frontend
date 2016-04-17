import React, { Component } from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import SSF from 'react-simple-serial-form';
import cookie from 'js-cookie';
// import Happy from '.material-ui/lib/svg/social/sentiment-satisfied';



let currentuser = cookie.get('user');

export default class Storyboard extends Component {
	constructor (...args) {
		super(...args);
		this.state = { posts: {} }
	}


componentWillMount() {
 		let { post_id } = this.props.params
 		ajax(`http://mudr.herokuapp.com/posts/create/${post_id}`).then(user => {
 			this.setState ({posts});
 		})
 	}




	dataHandler(data) {
		console.log(this.props.params)
  	let {post_id } = this.props.params;

  	console.log("data", data);
  	console.log("post_id =>", post_id);
    		ajax({
        		url: `http://mudr.herokuapp.com/posts/${post_id}`,
        		type: 'GET',//<--- GET request?
        		data: data,
 	       	dataType: 'json',
 	       	headers: {
 	        	  'X-Auth-Token': currentuser.auth_token
 		       	}
	    	}).then( () => {
	    	this.setState = ({posts});
	    	hashHistory.push(`/storyboard/${post_id}`);
  
	     });
 	}


 		render () {
		return(
			<div className="storyboard-wrapper">
				<div className="storyboard-main">
					<h3>STORYBOARD</h3>

					<div className="story-box">
						<div className="story-box-title"> Story Title</div>
						<div className="story-box-title">

						</div>
					</div>

					<SSF onData={::this.dataHandler}>
						<div className="comment-box">
							<input type="text" name="comment" placeholder="What do you think?"/>
						</div>
						<button> Leave Comment </button>
					</SSF>
	
				</div>


				<div className="leaderboard">
					<h3>LEADERBOARD</h3>


					<ul>
					<li><span>username2 score 90</span></li>
					<li><span>username2 score 90</span></li>
					<li><span>username2 score 90</span></li>
					<li><span>username2 score 90</span></li>
					<li><span>username2 score 90</span></li>
					</ul>
					
			</div>

		</div>






			)
	}
}
					// <li><span>username3</span><p>score 80</p></li>
					// <li><span>username4</span><p>score 70</p></li>
					// <li><span>username5</span><p>score 60</p></li>
					// <li><span>username6</span><p>score 50</p></li>
					// <li><span>username7</span><p>score 40</p></li>
					// <li><span>username8</span><p>score 30</p></li>
					// <li><span>username9</span><p>score 20</p></li>
					// <li><span>username10</span><p>score 10</p></li>