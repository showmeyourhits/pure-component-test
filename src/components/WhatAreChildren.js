import React from 'react';
import PropTypes from 'prop-types';
import SongComponent from './Song';
import debugRender from 'react-render-debugger';

export class WhatAreChildren extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  }

  shouldComponentUpdate = (nextProps) => {
      const areEqual = this.props.children === nextProps.children;

      console.log(this.props.title);
      console.log('Children are:');
      console.log(this.props.children);
      console.log(`typeof children -> ${typeof this.props.children}`)
      console.log(`Are children equal: ${areEqual}?`);
      console.log('###########################\n');

      return !areEqual;
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="40"></th>
            <th>{this.props.title}</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default debugRender(WhatAreChildren);