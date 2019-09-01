import '../css/style-spinner.css';
import React from 'react';

const SpinnerComponent = (props) => {
    return (
        <div className = "spinner-container">
            <div className = "spinner-loader"></div>
            <div className = "description-layout">{props.description}</div>
        </div>
    );
}

export default SpinnerComponent;
