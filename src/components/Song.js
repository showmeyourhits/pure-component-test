import React from 'react';
import PropTypes from 'prop-types';
import debugRender from 'react-render-debugger';

export class SongComponent extends React.Component {
    static propTypes = {
        song: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
    }

    render() {
        const { title } = this.props.song;

        return (
            <tr>
                <td></td>
                <td>«{title}»</td>
            </tr>
        );
    }
}

export default debugRender(SongComponent);