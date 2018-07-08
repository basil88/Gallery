import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';

class Gallery extends React.Component {
    static propTypes = {
        tag: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    }

    render() {
        return (
            <div className="gallery-root">
                <Image/>
                <Image/>
                <Image/>
                <Image/>
            </div>
        );
    }
}

export default Gallery;