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
				<div className="happy-link">
					<Link to="/storyboard">I am HAPPY</Link>
				</div>
				<div className="sad-link">
					<Link to="/submission">I am SAD</Link>
				</div>
			</div>





		)

	}
}