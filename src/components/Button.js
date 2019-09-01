import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            primaryColor: this.props.primaryColor,
            textColor: 'black'
        }
    }

    _onHover = () => {
        this.setState(
            {
                primaryColor: this.props.hoverColor,
                textColor: "white"
            }
        );
    }

    _onHoverOff = () => {
        this.setState(
            {
                primaryColor: this.props.primaryColor,
                textColor: "black"
            }
        );
    }

    render(){
        //Using inline styles to dynamically change button color on hover using props
        const style = {
            background: `${this.state.primaryColor}`,
            color: `${this.state.textColor}`,
            borderRadius: '10px',
            transition: 'all .3s',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '10px',
            paddingBottom: '10px',
            outline: '0'
        }
        return(
            <button className = "button-layout" 
            value={this.props.value}
            onClick = {this.props.onButtonClick} 
            onMouseOver = {this._onHover}
            onMouseLeave = {this._onHoverOff}
            style={style}>
                <i className = {`fa ${this.props.iconName}`}/>
                <span style ={{marginLeft: "20px"}}>{this.props.children}</span>
            </button>
        );
    }
}

export default Button;