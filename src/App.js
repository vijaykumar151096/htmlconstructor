import React from 'react';
import ReactDOM from 'react-dom';
import Templates from './Templates/templates.js';
import Button from './Templates/Button.js';
import './App.css';


function App() {
  return (
    <div className="App">
    	<span>
	        <h1> HTML Construction </h1>
	        <center>
	        	<textarea class="jsontextarea" id="inputjson" name="inputjson" rows="10" cols="50"></textarea>
	        </center>
	        <button type="button" onClick={processJson}>Generate</button>
    	</span>
    	<span>
	        <div id="outputhtml" > Response </div> 

	        <button type="button" id="gitpush" class="dN" onClick={pushCodetoGit}>PushtoGIT</button>
    	</span>
    </div>
  );
}

const nameCapitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1) ;

function processJson()
{
	try{
		var jsonstring = document.getElementById('inputjson').value ;
		var complete_structure = JSON.parse(jsonstring);

		var attribute_structure = complete_structure.Attributes;
		attribute_structure.forEach( function(structure){
			var element = document.createElement('div');	
			var html = new Templates[nameCapitalized(structure.type)](structure);
			ReactDOM.render(html.render(), element);
			document.getElementById('outputhtml').appendChild(element);
		});
		var buttonelement = document.createElement('div');
		var button_html = new Button(complete_structure);
		ReactDOM.render(button_html.render(), buttonelement);
		document.getElementById('outputhtml').appendChild(buttonelement);
		document.getElementById('gitpush').classList.remove('dN')	
	} catch (e){
		console.log(e);
	}
}

function pushCodetoGit(){
	console.log("hasi");
}

function writeToFile(){
	<!-- debugger;
	var fso = window.ActiveXObject("Scripting.FileSystemObject");  
    var s = fso.CreateTextFile("C:\test.txt", "true");
    s.writeline("HI");
    s.writeline("Bye");
    s.writeline("-----------------------------");
    s.Close(); -->
}

export default App;
