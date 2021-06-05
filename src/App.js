import React from 'react';
import ReactDOM from 'react-dom';
import Templates from './Templates/templates.js';
import Button from './Templates/Button.js';
import './App.css';
import './Templates/templates.css'

const nameCapitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1) ;

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
	        <div id="outputhtml"> </div> 

	        <button type="button" id="gitpush" class="dN" onClick={pushCodetoGit}>PushtoGIT</button>
    	</span>
    </div>
  );
}

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

	var email = "sureshvijaykumar1996@gmail.com";
	var token = "token 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";
	var repositoryname = "";
	var username = "vijaykumar151096";

	var url = "https://api.github.com/repos/vijaykumar151096/htmlconstructor/contents/src/Templates/response.html";
	var xhr = new XMLHttpRequest();
	xhr.open("PUT", url);
	var doc_content = document.getElementById('outputhtml').innerHTML;
	var content = btoa(unescape(encodeURIComponent(doc_content)));

	xhr.setRequestHeader("Accept", "application/vnd.github.v3+json");
	xhr.setRequestHeader("Authorization", token);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
	      console.log(xhr.status);
	      debugger;
	      console.log(xhr.responseText);
	   }};

	var data = {
	    "message": "api commit 1",
	    "content": content ,
	    "committer": {
	        "name": username,
	        "email": email,
	        "author": {
	            "name": username,
	            "email": email
	        }
	    }
	};

	xhr.send(JSON.stringify(data) );

}


export default App;
