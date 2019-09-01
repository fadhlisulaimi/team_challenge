import '../css/style-dialog.css';
import React from 'react';
import Button from '../components/Button';


class ConfirmDialog extends React.Component{
    render(){
        return(
            <div className = "dialog-container">
                <div className  = "dialog-layout">
                <h2><b>{this.props.title}</b></h2>
                <h5>{this.props.subHeading}</h5>
                <div className ="dialog-button-section">
                    {/* Call Button */}   
                    <Button
                    value = {this.props.primaryDescription}
                    iconName = "fa-phone" 
                    onButtonClick={this.props.onCallButtonClick}
                    primaryColor = "#f1e8c3"
                    hoverColor = "green">
                        Call {this.props.primaryDescription}
                    </Button>
                    <span style = {{marginLeft:"10px"}}></span>
                    {/* Close Button */}
                    <Button
                    value = ""
                    iconName = "fa-times" 
                    onButtonClick={this.props.onCancelButtonClick}
                    primaryColor = "#f1e8c3"
                    hoverColor = "#b1401d">
                        Close
                    </Button>
                </div>
                </div>
            </div>
        );
    }
}

export default ConfirmDialog;