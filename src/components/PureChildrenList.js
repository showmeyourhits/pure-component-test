import React from 'react';
import PropTypes from 'prop-types';
import SongComponent from './Song';
import debugRender from 'react-render-debugger';

export class PureChildrenList extends React.PureComponent {
  static propTypes = {
    children: PropTypes.array.isRequired,
    withSingleChild: PropTypes.bool.isRequired,
  }

  // shouldComponentUpdate (nextProps) {
  //   console.log('########################');
  //   console.log(`Component with ${this.props.withSingleChild ? 'single child' : 'children'}`)
  //   console.log(`Are children equal? - ${nextProps.children === this.props.children}`);
  //   console.log('########################');
  // }

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