import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			meat: 1,
			salad: 1,
			bacon: 1,
			cheese: 1
			
		}

	}
	// This is an alternative to 'state = {}''
	// constructor(props) {
	// 	super(props);
	// 	this.state = {}
	// }

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls />

			</Aux>
		);
	}
}

export default BurgerBuilder;