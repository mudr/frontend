import React, { Component } from 'react';
import { render } from 'react-dom';


export default class MainComponent extends Component {

	render(){	

		return(

			<div className="main-wrapper">

				<div className="main-flex">

					<div className="logo">
						<img src="http://fillmurray.com/50/50" alt="logo"/>
					</div>

					<div className="main-username">username</div>

					<div className="main-points">points</div>


				</div>


			</div>


		)

	}
}