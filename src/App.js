import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import SONGS from './songs';
import MdAdd from 'react-icons/lib/md/add';

import List from './components/List';

import PureList from './components/PureList';

import ChildrenList from './components/ChildrenList';
import Song from './components/Song';

import PureChildrenList from './components/PureChildrenList';
import PureSong from './components/PureSong';

class App extends Component {
  state = {
    songs: SONGS,
    newName: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleAddSong = (event) => {
    event.preventDefault();
    const { newName } = this.state;

    this.setState({
      newName: '',
      songs: [...this.state.songs, { title: newName }],
    });
  }

  render() {
    const { songs, newName, newAuthor } = this.state;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="main-header">«Ready To Render»</h1>
          <form onSubmit={this.handleAddSong} autoComplete="off">
            <div className="form-group">
              <label htmlFor="newName" className="input-label">Add your song</label>
              <input type="text" id="newName" className="form-control" name="newName" required value={newName} onChange={this.handleChange} placeholder="Enter text and press enter" />
            </div>
          </form>
        </div>
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col"><PureList songs={songs} /></div>

              <div className="col"><PureChildrenList>
                {songs.map(song => <PureSong song={song} />)}
              </PureChildrenList></div>
              <div className="col"><List songs={songs} /></div>


              <div className="col"><ChildrenList>
                {songs.map(song => <Song song={song} />)}
              </ChildrenList></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
