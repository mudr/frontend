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
	    	hashHistory.push("/storyboard");
  
	     });
 	}


 		render () {
		return(
			<div className="storyboard-wrapper">
			<div className="next"><b>Next Story > </b></div>
				<div className="storyboard-main">
					<h3>STORYBOARD</h3>

					<div className="story-box">
						<div className="story-box-title"><b> Story Title</b></div>
						<div className="story-box-content">

						I am a story Gochujang austin viral skateboard, 
						chicharrones synth chambray dreamcatcher try-hard man 
						braid ennui whatever post-ironic. Whatever freegan ethical 
						chartreuse brooklyn. Pitchfork humblebrag iPhone, austin blog 
						semiotics cliche flexitarian. Photo booth direct trade flannel, 
						bespoke brunch wolf small batch poutine blue bottle. Food truck 
						fap irony tofu, four loko neutra whatever +1 normcore. Letterpress 
						art party trust fund selvage. Pabst dreamcatcher vegan, you probably 
						haven't heard of them messenger bag typewriter gluten-free.
						I am a story Gochujang austin viral skateboard, 
						chicharrones synth chambray dreamcatcher try-hard man 
						braid ennui whatever post-ironic. Whatever freegan ethical 
						chartreuse brooklyn. Pitchfork humblebrag iPhone, austin blog 
						semiotics cliche flexitarian. Photo booth direct trade flannel, 
						bespoke brunch wolf small batch poutine blue bottle. Food truck 
						fap irony tofu, four loko neutra whatever +1 normcore. Letterpress 
						art party trust fund selvage. Pabst dreamcatcher vegan, you probably 
						haven't heard of them messenger bag typewriter gluten-free.

						</div>
					</div>

					<div className="comments-title"><b> Comments</b></div>
					<div className="live-comments">

					<div className="comment">
					<b>Bobby:</b> Hashtag art party ethical, 
					ennui letterpress cred cray roof party farm-to-table tumblr. 
					</div>

					<div className="comment">
					<b>Sarah:</b> I am an comment, 
					ennui cool story cred cray roof party farm-to-table tumblr. 
					heard of them messenger bag typewriter gluten-free.
					</div>

					<div className="comment">
					<b>Jeff:</b> I am an comment, 
					ennui cool story cred cray roof you're cool, ttyl, hags. Pitchfork humblebrag iPhone, austin blog 
					semiotics cliche flexitarian. Photo booth direct trade flannel, 
					bespoke brunch wolf small batch poutine blue bottle. Food truck 
					fap irony tofu, four loko neutra whatever +1 normcore. Letterpress 
					art party trust fund selvage.
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