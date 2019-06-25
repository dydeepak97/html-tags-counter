import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CodeView from './component/CodeView';
import SearchUI from './component/SearchUI';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      searchUrl: '',
    }
  }

  handleSearch = (url) => {
    this.setState({ searchUrl: url });
  }

  render() {
  
    return (
      <div className="App container-fluid text-center">
        <div className='main'>
        <Router>
        <Route 
            exact
            path='/'
            render={(routerProps) => (
              <SearchUI {...routerProps} onSearch={this.handleSearch} />
            )}
          />
        <Route 
            path='/code'
            render={(routerProps) => (
              <CodeView {...routerProps} searchUrl={this.state.searchUrl} />
            )}
          />
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
