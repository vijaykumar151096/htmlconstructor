import React from 'react';
import './templates.css';

class Password extends React.Component {

	Password(structure){
		this.structure = structure;
	}
  	render() {
  		return (
    		<div>
    			<span>{this.props.name}</span>
    			<input type="password" value={this.props.value} />
    		</div>
    	);
  	}
}

export default Password