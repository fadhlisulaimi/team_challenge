import '../css/style-persons.css';
import React from 'react';
import Button from './Button';

class PersonCard extends React.Component {
    render (){
        return (
        <div className = "card-layout">
            <div className = "row">
                <div className = "left-layout column">
                    <i className = "fa fa-user card-icon-layout"/>
                </div>
                <div className = "right-layout column">
                    <h4><b>{this.props.person.name}</b></h4>
                    <span><b>Username: </b> {this.props.person.username}</span>
                    <br></br>
                    <span><b>Email: </b> {this.props.person.email}</span>
                </div>
            </div>
            <div className = "location-section">
            <div className = "row">
                <div className = "left-layout column">
                <i className = "fa fa-map-marker card-icon-layout"/>
                </div>
                <div className = "right-layout column">
                    <h5><b>{this.props.person.address.street}</b></h5>
                    <span><b>Suite: </b> {this.props.person.address.suite}</span>
                    <br></br>
                    <span><b>City: </b> {this.props.person.address.city}</span>
                    <br></br>
                    <span><b>Zip Code: </b> {this.props.person.address.zipcode}</span>
                </div>
            </div>
            </div>
            <div className = "call-section">
                <Button
                value = {this.props.person.phone}
                iconName = "fa-phone" 
                onButtonClick={this.props.onCallButtonClick}
                primaryColor = "#f1e8c3"
                hoverColor = "green">
                    Call {this.props.person.name}
                </Button>
            </div>
        </div>
        );
    }
}

export default PersonCard;