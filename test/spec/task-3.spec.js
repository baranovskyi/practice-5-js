import chai from "chai";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Tabs from "../../src/task-3";

const assert = chai.assert;

const tabs = [
    { header: "t-h 1", content: "t-b 3" },
    { header: "t-h 2", content: "t-b 2" },
    { header: "t-h 3", content: "t-b 1" },
];

function checkHeader(box, data, getVal, active) {
    assert.equal(box.children.length, 3, `count of content divs in ${box.outerHTML}`);
    data.forEach((el, i) => {
        assert.equal(box.children[i].textContent, getVal(el), `content ${box.outerHTML}`);
        if (i === active) {
            assert.isTrue(box.children[i].classList.contains("active"), `active element of headers ${box.children[i].outerHTML} has class "active"`);
        } else {
            assert.isFalse(box.children[i].classList.contains("active"), `inactive element of headers ${box.children[i].outerHTML} hasn't class "active"`);
        }
    })
}

function checkContent(box, data, getVal, active) {
    assert.equal(box.children.length, 3, `count of content divs in ${box.outerHTML}`);
    data.forEach((el, i) => {
        assert.equal(box.children[i].textContent, getVal(el), `content ${box.outerHTML}`);
        if (i === active) {
            assert.isFalse(box.children[i].classList.contains("d-none"), `active element of content ${box.children[i].outerHTML} hasn't class "d-none"`);
        } else {
            assert.isTrue(box.children[i].classList.contains("d-none"), `inactive element of content ${box.children[i].outerHTML} has class "d-none"`);
        }
    })
}

function checkActive(hBox, cBox, index, message) {
    assert.isTrue(hBox.children[index].classList.contains("active"), `${message}, class active in header`);
    assert.isFalse(cBox.children[index].classList.contains("d-none"), `${message}, class d-none in content`);
}
function checkInactive(hBox, cBox, index, message) {
    assert.isFalse(hBox.children[index].classList.contains("active"), `${message}, class active in header`);
    assert.isTrue(cBox.children[index].classList.contains("d-none"), `${message}, class d-none in content`);
}

describe("<Tabs />", () => {

    it("type", () => {
        assert.isTrue(ReactTestUtils.isElementOfType(<Tabs />, Tabs));
    });

    it("structure of component", () => {
        const component = ReactTestUtils.renderIntoDocument(<Tabs tabs={tabs}/>);
        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        
        assert.equal(divs[0].className, "row");
        assert.equal(divs[0].children.length, 2, `count elements of container div`);
        assert.equal(divs[0].children[0].tagName, "UL", divs[0].children.innerHTML);
        assert.isTrue(divs[0].children[0].classList.contains("col-3"), "class col-3 in " + divs[0].children[0].innerHTML);
        assert.isTrue(divs[0].children[0].classList.contains("list-group"), "class list-group in " + divs[0].children[0].innerHTML);

        checkHeader(divs[0].children[0], tabs, el => el.header, 0);
        assert.equal(divs[1].className, "col-9");
        checkContent(divs[1], tabs, el => el.content, 0);
    });

    it("structure of component headerTpl", () => {
        const component = ReactTestUtils.renderIntoDocument(<Tabs tabs={tabs} headerTpl={props => props.item.content} />);
        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        
        checkHeader(divs[0].children[0], tabs, el => el.content, 0);
        checkContent(divs[1], tabs, el => el.content, 0);
    });

    it("structure of component contentTpl", () => {
        const component = ReactTestUtils.renderIntoDocument(<Tabs tabs={tabs} contentTpl={props => props.item.header} />);
        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        
        checkHeader(divs[0].children[0], tabs, el => el.header, 0);
        checkContent(divs[1], tabs, el => el.header, 0);
    });

    it("clicking on tabs", () => {
        const component = ReactTestUtils.renderIntoDocument(<Tabs tabs={tabs}/>);
        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        const headers = divs[0].children[0];
        const bodies = divs[1];
        
        checkInactive(headers, bodies, 1, "before click");

        ReactTestUtils.Simulate.click(headers.children[1]);
        checkActive(headers, bodies, 1, "after click");

        ReactTestUtils.Simulate.click(headers.children[1]);
        checkActive(headers, bodies, 1, "repeated click");

        ReactTestUtils.Simulate.click(headers.children[2]);
        checkInactive(headers, bodies, 1, "click on another tab");
    });
});
