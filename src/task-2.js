import React from "react";
import Button from './Button';
import Input from './Input';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            result: ''
        }
        this.inputOne = this.inputOne.bind(this)
        this.inputTwo = this.inputTwo.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
        this.multiply = this.multiply.bind(this)
        this.divide = this.divide.bind(this)
    }

    inputOne(event) {
        if (!parseInt(event.target.value)) {
            return false;
        }
        this.setState({ value1: Number(event.target.value) })
    }
    inputTwo(event) {
        if (!parseInt(event.target.value)) {
            return false;
        }
        this.setState({ value2: Number(event.target.value) })
    }
    clearInputs() {
        this.setState({ value1: 0, value2: 0, result: 0 })
    }

    add() {
        this.setState({ result: this.state.value1 + this.state.value2 })
    }
    subtract() {    
        this.setState({ result: this.state.value1 - this.state.value2 })
    }
    multiply() {
        this.setState({ result: this.state.value1 * this.state.value2 })
    }
    divide() {
        this.setState({ result: this.state.value1 / this.state.value2 })
    }
    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col-3"><Input value={this.state.value1} onChange={this.inputOne} placeholder="Operand 1" /></div>
                    <div class="col-3"><Input value={this.state.value2} onChange={this.inputTwo} placeholder="Operand 2" /></div>
                    <div class="col-2"><Button class="btn btn-block btn-danger" onClick={this.clearInputs} name="Clear" /></div>
                </div>
                <div class="row my-3">
                    <div class="col-2"><Button class="btn btn-block btn-secondary" onClick={this.add} name="Add" /></div>
                    <div class="col-2"><Button class="btn btn-block btn-secondary" onClick={this.subtract} name="Subtract" /></div>
                    <div class="col-2"><Button class="btn btn-block btn-secondary" onClick={this.multiply} name="Multiply" /></div>
                    <div class="col-2"><Button class="btn btn-block btn-secondary" onClick={this.divide} name="Divide" /></div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <Input value={this.state.result} placeholder="Result" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;