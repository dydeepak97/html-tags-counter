import React, { Component } from 'react'

export default class TagsCount extends Component {

  getButtonClass = (tag) => {
    let classGroup = 'btn btn-lg btn-block';
    
    if(tag.name === this.props.activeTag){
      classGroup = classGroup + ' btn-danger';
    }
    else {
      classGroup = classGroup + ' btn-primary';
    }

    return classGroup;
  }

  render() {
    // Save reference to this.getButtonClass because 'this' will not be same inside inside Array.map
    let getButtonClass = this.getButtonClass; 

    return (
      <div className={'tags-container ' + this.props.className}>
        {
          this.props.tags.map(tag => {
            return (
              <div
                className={getButtonClass(tag)}
                onClick={() => {
                  this.props.onTagSelect(tag.name);
                }}
              >
                {tag.name} ({tag.count})
              </div>
            );
          })
        }
      </div>
    );
  }
}
