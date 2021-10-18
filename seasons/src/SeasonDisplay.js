import React from 'react';
import Spinner from './Spinner';

const SeasonDisplay = (props) => {
    return (
        <div>
            <i className="sun icon" />
            Season Display {props.lat}
            <Spinner message = 'Spinner...' />
        </div>
    );
}

export default SeasonDisplay;