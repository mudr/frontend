import React, { Component } from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
// import Happy from '.material-ui/lib/svg/social/sentiment-satisfied';

export default class Storyboard extends Component {
	constructor (...args) {
		super(...args);
		// this.state { user: {} }
	}








 		render () {
		return(
			<div className="storyboard-wrapper">
				<div className="storyboard-main">
					<h3>STORYBOARD</h3>

					<div className="story-box">
						<div className="story-box-title"> Story Title</div>
						<div className="story-box-title">

							Four dollar toast gastropub etsy, 
							tattooed franzen deep v yuccie mumblecore 
							schlitz cardigan meggings. Locavore selfies 
							blog farm-to-table, vinyl you probably haven't 
							heard of them vice chia gluten-free trust fund 
							pork belly williamsburg.

						</div>
					</div>
				</div>


				<div className="leaderboard">
					<h3>leaderboard </h3>


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