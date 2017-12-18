import React from 'react';
import PropTypes from 'prop-types';
import SongComponent from './Song';
import debugRender from 'react-render-debugger';

export class PureChildrenList extends React.PureComponent {
  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="40"></th>
            <th>PureComponent with children</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default debugRender(PureChildrenList);