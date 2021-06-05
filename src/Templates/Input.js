import React from 'react';
import './templates.css';

class Input extends React.Component {

	Input(structure){
		this.structure = structure;
	}

  	render() {
  		return (
    		<div>
    			<span>{this.props.name}</span>
    			<input type="text" value={this.props.value} />
    		</div>
    	);
  	}
}

export default Input