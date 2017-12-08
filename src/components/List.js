import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import debugRender from 'react-render-debugger';

export class List extends React.Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
  }

  render() {
    return (
      <table className="table col table-bordered">
        <thead>
          <tr>
            <th width="40"></th>
            <th>Component with props</th>
          </tr>
        </thead>
        <tbody>
          {this.props.songs.map(song => (
            <Song song={song} key={song.title} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default debugRender(List);