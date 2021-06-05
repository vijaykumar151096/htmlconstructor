import React from 'react';
import './templates.css';

class Dropdown extends React.Component {
  render() {
  const optionsmap = this.props.dropdownvalues;
    return (
    	<div>
    		<label for="{this.props.name}">{this.props.name}</label>
    		<select name="{this.props.name}" id="{this.props.name}">
	    		{optionsmap.map( item => 
	    			<option value="{item.value}">{item.displayvalue}</option>
	    			)};
    		</select>
    	</div>
    );
  }
}

export default Dropdown