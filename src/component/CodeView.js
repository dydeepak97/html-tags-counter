import React from 'react';
import { withRouter, Link } from 'react-router-dom';


import { countTags } from '../util/htmlParse';

import { fetchSourceFromUrl } from '../service/FetchService';
import TagsCount from './TagsCount';
import SourceCode from './SourceCode';
import SpinnerGroup from './SpinnerGroup';

class Code extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTag: '',
      sourceCode: '',
      errorMessage: '',
      isLoading: true,
      searchIndex: -1
    }
  }

  // Fetch webpage code when component mounts
  componentDidMount() {
    fetchSourceFromUrl(this.props.searchUrl, (err, res) => {
      if (err) {
        this.setState({
          sourceCode: '',
          errorMessage: 'URL not found, Try searching for another URL',
          isLoading: false
        });
      }
      else {
        this.setState({
          sourceCode: res,
          isLoading: false
        });
      }
    });
  }

  getTagsArray = (sourceCode) => {
    let tagsCount = countTags(sourceCode);

    return Object.keys(tagsCount).map(tagName => {
      return {
        name: tagName,
        count: tagsCount[tagName]
      }
    });
  }

  handleTagClick = (tagName) => {
    const { activeTag, searchIndex} = this.state,
      newState = {};

    newState.activeTag = tagName;
    newState.searchIndex = activeTag === tagName ? searchIndex + 1 : 0;

    this.setState({ ...newState });

    window.location.href = `#highlight-${newState.searchIndex}`
  }

  render() {

    return (
        <div >
          <Link to='/' className='btn btn-primary mt-3 mb-3'>Go Back</Link>
          {
            this.state.errorMessage &&
            <h2 className='mt-3 text-muted'>{this.state.errorMessage}</h2>
          }
          {
            !this.state.errorMessage &&
            this.state.isLoading &&
            <SpinnerGroup />
          }
          {
            this.state.sourceCode &&
            <div className='row result'>
              <TagsCount
                activeTag={this.state.activeTag}
                tags={this.getTagsArray(this.state.sourceCode)}
                className='col-4'
                onTagSelect={this.handleTagClick}
              />
              <SourceCode
                className='col-8'
                code={this.state.sourceCode}  
                activeTag={this.state.activeTag} />
            </div>
          }
      </div >

    );
  }
}

export default withRouter(Code);
