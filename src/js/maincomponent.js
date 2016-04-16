import React, { Component } from 'react';
import { render } from 'react-dom';


export default class MainComponent extends Component {

	render(){	

		return(

			<div className="main-wrapper">

				<div className="main-flex">

					<div className="logo">
						<span> Müdr </span>
					</div>


					<div className="username-password">
						<div className="main-username">username</div>
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