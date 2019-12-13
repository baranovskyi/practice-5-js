import chai from "chai";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Calculator from "../../src/task-2.js";

const assert = chai.assert;
const component = ReactTestUtils.renderIntoDocument(<Calculator />);
const inputs = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, "form-control");
const buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "button");

function inputChange(el, value) {
    el.value = value;
    ReactTestUtils.Simulate.change(el);
}

function checkButton(el, text, cName="btn-secondary") {
    assert.equal(el.className, "col-2", el.outerHTML);
    assert.equal(el.children.length, 1, "count of elements in " + el.innerHTML);
    assert.equal(el.children[0].tagName, "BUTTON", el.innerHTML);
    assert.isTrue(el.children[0].classList.contains("btn"), "class btn in " + el.innerHTML);
    assert.isTrue(el.children[0].classList.contains("btn-block"), "class btn-block in " + el.innerHTML);
    assert.isTrue(el.children[0].classList.contains(cName), `class ${cName} in ${el.innerHTML}`);
    assert.equal(el.children[0].textContent, text, el.innerHTML);
}

function checkInput(el, placeholder, cName="col-3") {
    assert.equal(el.className, cName, el.outerHTML);
    assert.equal(el.children.length, 1, "count of elements in " + el.innerHTML);
    assert.equal(el.children[0].tagName, "INPUT", el.innerHTML);
    assert.equal(el.children[0].type, "text", el.innerHTML);
    assert.equal(el.children[0].placeholder, placeholder, el.innerHTML);
    assert.isTrue(el.children[0].classList.contains("form-control"), "class btn in " + el.innerHTML);
}

describe("<Calculator />", () => {

    it("type", () => {
        assert.isTrue(ReactTestUtils.isElementOfType(<Calculator />, Calculator));
    });

    it("structure of component", () => {

        const divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "div");
        assert.equal(divs[0].className, "container");
        assert.equal(divs[1].className, "row");
        checkInput(divs[2], "Operand 1");
        checkInput(divs[3], "Operand 2");
        checkButton(divs[4], "Clear", "btn-danger");
        assert.equal(divs[5].className, "row my-3");
        checkButton(divs[6], "Add");
        checkButton(divs[7], "Subtract");
        checkButton(divs[8], "Multiply");
        checkButton(divs[9], "Divide");
        assert.equal(divs[10].className, "row");
        checkInput(divs[11], "Result", "col-4");
    });

    it("check input into fields Operand 1 and 2", () => {

        [
            ["231", "231"],
            ["aa", ""],
            ["q2erty", "2"]
        ].forEach((v) => {
            for(let i=0; i<=1; i++) {
                inputChange(inputs[i], v[0]);
                assert.equal(inputs[i].value, v[1], `Operand ${i}`);
            }
        });
        
    });

    it("check input into field Result", () => {

        inputChange(inputs[2], "q");
        assert.equal(inputs[2].value, "");
        inputChange(inputs[2], "1");
        assert.equal(inputs[2].value, "");
    });

    it("clicking Add button", () => {

        inputChange(inputs[0], "3");
        inputChange(inputs[1], "4");

        ReactTestUtils.Simulate.click(buttons[1]);
        assert.equal(inputs[2].value, "7");
    });

    it("clicking Subtract button", () => {

        inputChange(inputs[0], "3");
        inputChange(inputs[1], "4");

        ReactTestUtils.Simulate.click(buttons[2]);
        assert.equal(inputs[2].value, "-1");
    });

    it("clicking Multiply button", () => {

        inputChange(inputs[0], "3");
        inputChange(inputs[1], "4");

        ReactTestUtils.Simulate.click(buttons[3]);
        assert.equal(inputs[2].value, "12");
    });

    it("clicking Divide button", () => {

        inputChange(inputs[0], "3");
        inputChange(inputs[1], "4");

        ReactTestUtils.Simulate.click(buttons[4]);
        assert.equal(inputs[2].value, "0.75");
    });

    it("clicking Clear button", () => {

        inputChange(inputs[0], "3");
        inputChange(inputs[1], "4");

        ReactTestUtils.Simulate.click(buttons[0]);
        assert.equal(inputs[2].value, "0");
    });
});
