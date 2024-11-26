import React from 'react';
import './loader.css';
import PropTypes from "prop-types";

type Tprops = {
    text: string
}

const Loader = ({text} :Tprops ) => {
    return (
        <div className="overlay">
            <div className="middle">
                <div>
                    <div className="spinner" />
                </div>
                <div className="text">
                    { text }
                </div>
            </div>
        </div>
    );
}

Loader.prototype = {
    text: PropTypes.string.isRequired,
}

export default Loader;