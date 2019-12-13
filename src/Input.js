import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input type='text' className='form-control' value={this.props.value} placeholder={this.props.placeholder}  onChange={this.props.onChange} />
        )
    }
}

export default Input;