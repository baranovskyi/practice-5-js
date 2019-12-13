import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className={this.props.class} onClick={this.props.onClick} name={this.props.name}>{this.props.name}</button>
        )
    }
}
export default Button;