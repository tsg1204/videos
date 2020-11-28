import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    handleSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
          }
        });
        this.setState({videos: response.data.items});
    };

    handleVideoSelect = (video) => {
        //console.log(video);
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
        <div className="ui container">
            <SearchBar onSearchSubmit={this.handleSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
        </div>
        );
    }
}

export default App;
