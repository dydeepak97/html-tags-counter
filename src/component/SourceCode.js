import React, { Component } from 'react';

import { getAllParts } from '../util/splitString';

export default class SourceCode extends Component {

  render() {
    let { code, searchTag } = this.props;

    return (
      <div className='source-code-container'>
        <div className='source-code-text'>
          { searchTag ?
            getAllParts(code, searchTag).map(part => {
              return <span className={part.highlight ? "highlighted" : ''} >{code.substring(part.start, part.end)}</span>
            })
            :
            code
          }
        </div>
      </div>
    )
  }
}
