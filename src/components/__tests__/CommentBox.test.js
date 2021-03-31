import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from 'Root'

let wrapped;

beforeEach(() => {
  wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and two button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "New Comment" },
    });

    wrapped.update();
  });

  it("has a text area that user can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("New Comment");
  });
  it("when form is submitted, text area gets emptied", () => {
    wrapped.find("form").simulate("submit");
    /*we should apply an update each time a state is changed and a component is
     re-rendered. Once a form is submitted we clear the form up (setState
     assigns to '' empty string)*/
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});