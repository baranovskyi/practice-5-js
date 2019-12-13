import config from "./rollup.config";
import merge from "lodash/merge";


config.external = [
    "mocha", "chai", ...config.external, "react-dom/test-utils"
];

export default merge({
    input: "test/**/*.spec.js",
    output: {
        file: "build/test-bundle.js"
    },
    globals: {
        mocha: "mocha",
        chai: "chai",
        "react-dom/test-utils": "ReactTestUtils"
    },
    intro: "if (typeof module !== \"undefined\") require(\"source-map-support\").install();"
}, config);
