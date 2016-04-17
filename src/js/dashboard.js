import React, { Component } from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
// import Happy from '.material-ui/lib/svg-icon/social/sentiment-satisfied';
// import Sad from '.material-ui/lib/svg-icon/social/sentiment-dissatisfied';
import { Link } from 'react-router';



export default class Dashboard extends Component {

	render(){	

		return(

			<div className="mood-select">
				<span> How are you feeling today?</span>

		
				<div className="wrapper1">
				<div className="happy-link">
					<Link to="/storyboard/:post_id">
					<div className="hidden1">HAPPY</div>
					<img src="http://www.forex21.com/wp-content/uploads/2015/05/happy-person.png" 
					alt="happy"/>

					</Link>
				</div>
				</div>


				<div className="wrapper2">
				<div className="sad-link">
					<Link to="/submission">
					<div className="hidden2">SAD</div>
					<img src="http://orig06.deviantart.net/d439/f/2012/320/b/8/obama_frown_render_by_kernelpanicx-d5l5f1z.png" 
					alt="happy"/>

					</Link>

				</div>
				</div>

			  </div>


		)

	}
}