import "../css/style-error.css";
import React from 'react';

const Error = (props) => {
    return(
        <div className = "error-layout">
            <i className = "fa fa-window-close icon-layout"/>
            <span className = "description-layout">{props.description}</span>
        </div>
    );

}

export default Error;