import React from 'react';
import PropTypes from 'prop-types';
import PureSong from './PureSong';
import debugRender from 'react-render-debugger';

export class PureList extends React.PureComponent {
  static propTypes = {
    songs: PropTypes.array.isRequired,
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="40"></th>
            <th>PureComponent with props</th>
          </tr>
        </thead>
        <tbody>
          {this.props.songs.map(song => (
            <PureSong song={song} key={song.title} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default debugRender(PureList);