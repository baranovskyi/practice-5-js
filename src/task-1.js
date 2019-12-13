import React from "react";
import PropTypes from "prop-types";
import TabItem from "./TabItem";

export default class Accordion extends React.Component {
    constructor(props){
        super(props);
    }

    makeCards() {
        const cards = this.props.tabs.map((tab, i) => {
            return <TabItem tab={tab} key={i}/>;
            });
        return cards;
    }
    
    render() {
        return (
            <div>
                {this.makeCards()}
            </div>
        );
    }
}

Accordion.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            content: PropTypes.string
        })
    )
};