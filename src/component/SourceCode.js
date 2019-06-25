import React, { Component } from 'react';

import { getAllParts } from '../util/splitString';

export default class SourceCode extends Component {

  renderSourceCodeParts = (code, activeTag) => {
    let activeIndex=0;

    return getAllParts(code, activeTag).map(part => {
      return (
        <span 
          className={part.highlight ? "highlighted" : ''}
          id={part.highlight? `highlight-${activeIndex++}`: ''} 
        >
          {code.substring(part.start, part.end)}
        </span>
      ); 
    })
  }

  render() {
    let { code, activeTag } = this.props;

    return (
      <div className={'source-code-container ' + this.props.className}>
        <div className='source-code-text'>
          { activeTag ?
            this.renderSourceCodeParts(code, activeTag)
            :
            code
          }
        </div>
      </div>
    )
  }
}
