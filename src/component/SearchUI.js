import React from 'react';

import { withRouter } from 'react-router-dom';

class SearchUI extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchUrl: '',
      errorMessage: ''
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

    this.props.onSearch(this.state.searchUrl);
    this.props.history.push("/code");
  }

  render() {
    return (
      <div className="App container-fluid text-center">
        <div className='main'>
          <div class="form-group search-form">
            {/* <h3 className='text-light'>Enter a URL</h3> */}
            {/* <input
              type="text"
              className="form-control form-control-lg mt-3"
              id="urlInput"
              placeholder="Enter URL"
              value={this.state.searchUrl}
              onChange={this.handleSearchUrlChange}
              autoFocus
            />
            <button
            className="btn btn-primary btn-lg mt-3"
            onClick={this.handleFetchUrl}
          >
            Search
          </button> */}
            <div class="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                id="urlInput"
                placeholder="Enter URL"
                value={this.state.searchUrl}
                onChange={this.handleSearchUrlChange}
                autoFocus
              />
              <div class="input-group-append">
                <button
                  className="btn btn-primary"
                  onClick={this.handleFetchUrl}
                  id='search-button'
                >
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>

          </div>
          {
            this.state.errorMessage &&
            <h2 className='mt-3 text-muted'>{this.state.errorMessage}</h2>
          }
        </div>

      </div >

    );
  }


}

export default withRouter(SearchUI);
