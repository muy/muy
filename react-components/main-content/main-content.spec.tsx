import * as React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import { BasicMainContent, NoPropsMainContent } from "./main-content.composition"

describe('main-content', () => {
  describe("with no props", () => {
    it("should match snapshot", () => {
      const rendered = create(<NoPropsMainContent />);
      expect(rendered).toMatchSnapshot();
    })
  })
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicMainContent />);
    const rendered = getByText('Hello from MainContent');
    expect(rendered).toBeTruthy();
  });
});
