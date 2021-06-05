import React from 'react';
import './templates.css';

class Radio extends React.Component {
  render() {
  const optionsmap = this.props.options;
    return (
    	<div>
    		{optionsmap.map( item => 
    				<div>
	    				<input type="radio" id="{item.displayvalue}" name="{this.props.name}" value="{item.value}" />
	    				<label for="{item.value}">{item.displayvalue}</label>
	    			</div>
    			)};
    	</div>
    );
  }
}

export default Radio