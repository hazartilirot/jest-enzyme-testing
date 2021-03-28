import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

/*In order to avoid duplicate code const wrapped = shallow(<App />) can be
 taken out from each "it" block and placed into a beforeEach so that the
 expression would be run for every since test.*/
let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
