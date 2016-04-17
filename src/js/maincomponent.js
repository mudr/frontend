import React, { Component } from 'react';
import { render } from 'react-dom';
import cookie from 'js-cookie';
import { Link } from 'react-router';


export default class MainComponent extends Component {
	constructor(...args) {
		super(...args);
		this.state = { user: cookie.get('user')}
	}

	render(){	
		let {user} = this.state;
		return(

			<div className="main-wrapper">

				<div className="main-flex">

					<div className="logo">
						<Link to="/dashboard"> Müdr </Link>
					</div>


					<div className="username-password">
						<div className="main-username">{user.username}</div>
						<div className="main-points">points</div>
					</div>
					<br/>

				</div>
					<div className="gradient-border">  </div>

				{this.props.children}


			</div>


		)

	}
}