import chai from "chai";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Accordion from "../../src/task-1";

const assert = chai.assert;

const tabs = [
    { header: "t-header.1", content: "t-body.3" },
    { header: "t-header.2", content: "t-body.2" },
    { header: "t-header.3", content: "t-body.1" },
];

function checkHeader(div, text) {
    assert.isTrue(div.classList.contains("card-header"), "class card-header in " + div.outerHTML);
    assert.isTrue(div.classList.contains("text-white"), "class text-white in " + div.outerHTML);
    assert.isTrue(div.classList.contains("bg-info"), "class bg-info in " + div.outerHTML);
    assert.equal(div.textContent, text, div.outerHTML);
}

function checkBody(div, text) {
    assert.isTrue(div.classList.contains("card-body"), "class card-body in " + div.outerHTML);
    assert.equal(div.textContent, text, div.outerHTML);
}

function checkActive(div, message) {
    assert.isTrue(div.children[0].classList.contains("active"), `${message}, class active in header`);
    assert.isFalse(div.children[1].classList.contains("d-none"), `${message}, class d-none in body`);
}

function checkInactive(div, message) {
    assert.isFalse(div.children[0].classList.contains("active"), `${message}, class active in header`);
    assert.isTrue(div.children[1].classList.contains("d-none"), `${message}, class d-none in body`);
}

describe("<Accordion />", () => {

    it("type", () => {
        assert.isTrue(ReactTestUtils.isElementOfType(<Accordion />, Accordion));
    });

    it("structure of component", () => {
        const component = ReactTestUtils.renderIntoDocument(<Accordion tabs={tabs} />);
        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        
        assert.equal(divs.length, 1 + tabs.length * 3, `count of div elements`);
    
        const items = divs[0].children;
        tabs.forEach((el, i) => {
            assert.equal(items[i].className, "card");
            assert.equal(items[i].children.length, 2, `count of div elements in card`);
            
            checkHeader(items[i].children[0], el.header);
            checkBody(items[i].children[1], el.content);
        });
    });

    it("click on tab item", () => {
        const component = ReactTestUtils.renderIntoDocument(<Accordion tabs={tabs} />);

        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        const items = divs[0].children;
        checkInactive(items[1], "before click");

        ReactTestUtils.Simulate.click(items[1].children[0]);
        checkActive(items[1], "after click");

        ReactTestUtils.Simulate.click(items[1].children[0]);
        checkInactive(items[1], "click after click");
    });

    it("mixed clicks on tabs", () => {
        const component = ReactTestUtils.renderIntoDocument(<Accordion tabs={tabs} />);

        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        const items = divs[0].children;

        ReactTestUtils.Simulate.click(items[0].children[0]);
        ReactTestUtils.Simulate.click(items[1].children[0]);

        checkActive(items[0], "after click [1]");
        checkActive(items[1], "after click [2]");

        ReactTestUtils.Simulate.click(items[1].children[0]);
        checkActive(items[0], "click after click [1]");
        checkInactive(items[1], "click after click [2]");
    });
});
