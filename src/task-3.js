import React from "react";
export default class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }
    clickHandler = (e) => {
        this.setState({
            selected: e.target.value
        })
    }
    renderHeaders() {
        const headers = this.props.tabs.map((tab, index) => {
            let activeClass = this.state.selected === index ? 'list-group-item active' : 'list-group-item';
            return <li className={activeClass} key={index} value={index} onClick={this.clickHandler}>{this.props.headerTpl({ item: tab, index: index })}</li>
        })
        return headers
    }
    renderContent() {
        const content = this.props.tabs.map((tab, index) => {
            let activeClass = this.state.selected === index ? '' : 'd-none'
            return <div className={activeClass} key={index}>{this.props.contentTpl({ item: tab, index: index })}</div>
        })
        return content;
    }
    render() {
        return (
            <div className="row">
                <ul className="col-3 list-group">
                    {this.renderHeaders()}
                </ul>
                <div className="col-9">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}


Tabs.defaultProps = {
    headerTpl: props => props.item.header,
    contentTpl: props => props.item.content
}