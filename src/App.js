import React from 'react';
import logo from './logo.svg';
import './App.css';
import Highlighter from "react-highlight-words";
import { getAllParts } from './util/splitString'

import { countTags } from './util/htmlParse';

const exHTML = `<!DOCTYPE html>
<html>
<body>
<div>
<h2></h2>
    <p></p>
<div>
<p></p>
</div>
</div>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`

function App() {

  let dom = countTags();

  let searchString = 'body'

  // console.log(dom[0].tagName);

  console.log('Chukcnks', getAllParts(exHTML, searchString));

  let output = <span>
    {
      getAllParts(exHTML, 'body').map(part => {
        return <span className={part.highlight ? "highlighted" : ''} >{exHTML.substring(part.start, part.end)}</span>
      })
    }
  </span>

  return (
    <div className="App">
      <p className='source-code-text'>{output}</p>
    </div>
  );
}

function Example() {
  return (<h1>EXAMPLE</h1>)
}



const lolStr = `alkfnalfanf affsafasfa `

function splitAndStyle(str) {
  return str.split();
}


export default App;
