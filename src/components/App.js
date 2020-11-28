import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';


class App extends React.Component {


    handleSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
          }
        });
        console.log(response);
    };

    render() {
        return (
        <div className="ui container">
            <SearchBar onSearchSubmit={this.handleSubmit} />
        </div>
        );
    }
}

export default App;
