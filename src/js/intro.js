import React, { Component } from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import { Link } from 'react-router';



export default class Intro extends Component {

	render(){	

		return(

			<div className="intro-wrapper">


				<div className="intro-flex">


					<div className="intro-logo">
							
							<Link to="/login">
							Müdr
							</Link>

			 		</div>
			
				

			 	</div>

				

			</div>


		)

	}
}