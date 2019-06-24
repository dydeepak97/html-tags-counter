import React, { Component } from 'react'

export default class TagsCount extends Component {


  render() {
    return (
      <div>
        {
          this.props.tags.map(tag => {
            return (
              <div
                className='btn btn-primary btn-lg mt-3' 
                onClick={() => {
                  this.props.onTagSelect(tag.name);
                }}
              >
                {tag.name}-{tag.count}
              </div>
            );
          })
        }
      </div>
    );
  }
}
