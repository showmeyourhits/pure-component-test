import React from 'react';
import PropTypes from 'prop-types';
import SongComponent from './Song';
import debugRender from 'react-render-debugger';

export class ListComponent extends React.Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="40"></th>
            <th>Component with children</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default debugRender(ListComponent);