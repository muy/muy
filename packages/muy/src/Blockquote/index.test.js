import React from "react";
import renderer from 'react-test-renderer';

import Blockquote from ".";

describe('Blockquote component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Blockquote/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
