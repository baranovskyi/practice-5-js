import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from "./task-1";
import Calculator from "./task-2";
import Tabs from "./task-3";
import "./task-4";

const tabs = [
{ header: "tab1", content: "tab-content 1" },
{ header: "tab2", content: "tab-content 2" },
{ header: "tab3", content: "tab-content 3" },
{ header: "tab4", content: "tab-content 4" },
{ header: "tab5", content: "tab-content 5" }
];

ReactDOM.render(<Accordion tabs={tabs} />, document.getElementById("task1"));
ReactDOM.render(<Calculator />, document.getElementById("task2"));

ReactDOM.render(<Tabs tabs={tabs} />, document.querySelector("#task3 .option1"));
ReactDOM.render(<Tabs
    tabs={tabs}
    headerTpl={props => `${props.index}. ${props.item.header}`}
    contentTpl={props => <h4>{props.item.content}</h4>} />, document.querySelector("#task3 .option2"));
ReactDOM.render(<Tabs
    tabs={tabs}
    headerTpl={props => props.item.content}
    contentTpl={props => props.item.header} />, document.querySelector("#task3 .option3"));
