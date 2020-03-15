import React from "react";
import Blockquote from "../../lib/Blockquote";
import rendersCorrectly from "../../test-utils/rendersCorrectly";

describe('<Blockquote />', () => {
    it("renders correctly", () => {
        rendersCorrectly(<Blockquote/>)
    })
})
