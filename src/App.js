import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import { countTags } from './util/htmlParse';

import { fetchSourceFromUrl } from './service/FetchService';
import TagsCount from './component/TagsCount';
import SourceCode from './component/SourceCode';
import SpinnerGroup from './component/SpinnerGroup';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      searchUrl: '',
      searchTag: '',
      sourceCode: '',
      errorMessage: '',
      isLoading: false,
    }
  }

  handleSearchUrlChange = (e) => {
    this.setState({ searchUrl: e.target.value });
  }

  handleFetchUrl = () => {
    // Return and update error message if url field is empty
    if (!this.state.searchUrl) {
      this.setState({
        errorMessage: 'Enter a url first'
      });
      return;
    }

    // To hide errorMessage and Display loading state
    this.setState({
      isLoading: true,
      errorMessage: ''
    });

    fetchSourceFromUrl(this.state.searchUrl, (err, res)=>{
      if(err){
        this.setState({
          sourceCode: '',
          errorMessage: 'URL not found, Try searching for another URL',
          isLoading:false
        });
      }
      else{
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

  handleTagSelect = (tagName) => {
    this.setState({ searchTag: tagName});
  }

  render() {
  
    return (
      <div className="App container-fluid text-center">
        <div className='main'>
          <div class="form-group mt-3">
            <h3 className='text-light'>Enter a URL</h3>
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              id="urlInput"
              placeholder="Enter URL"
              value={this.state.searchUrl}
              onChange={this.handleSearchUrlChange}
              autoFocus
            />
          </div>
          <button
            className="btn btn-primary btn-lg mt-3"
            onClick={this.handleFetchUrl}
            disabled={this.state.isLoading}
          >
            {
              this.state.isLoading ?
                <div>
                  <span class="spinner-grow spinner-border-sm" role="status" aria-hidden="true"></span>
                </div>
                :
                'Search'
            }
          </button>
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
            <div>
              <TagsCount 
              tags={this.getTagsArray(this.state.sourceCode)}
              onTagSelect={this.handleTagSelect}
              />
              <SourceCode code={this.state.sourceCode} searchTag={this.state.searchTag} />
            </div>
          }
        </div>

      </div >
      
    );
  }


}




export default App;
