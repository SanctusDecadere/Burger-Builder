import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
	<div className={classes.BuildControl}>
		<div className={classes.Label}>{props.label}</div>
		<button className={classes.Less}>Less</button>
		<button className={classes.More}>More</button>
	</div>

);

export default buildControl;



// <BuildControls>
// 	<BuildControl label={'meat'} />
// 	<BuildControl label={'salad'} />
// 	<BuildControl label={'bacon'} />
// 	<BuildControl label={'cheese'} />
// </BuildControls>