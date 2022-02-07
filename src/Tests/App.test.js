import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";

import App from "../App";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = render(<App />);
  });

  it("it should initially render all five preset todos", () => {
    expect(component.container.querySelectorAll(".todo").length).toBe(5);
  });

  it("it should delete the correct todo when the delete button is pressed", () => {
    // list should have a todo 'call alice'
    expect(component.queryByText("Call Alice")).toBeTruthy();

    // press the delete button
    const aliceTodo = component.getByText("Call Alice").closest("li");
    const deleteButton = within(aliceTodo).getByLabelText("Delete");
    userEvent.click(deleteButton);

    // list should not have a todo 'call alice'
    expect(component.queryByText("Call Alice")).toBeFalsy();

    // there should be 4 todos left
    expect(component.container.querySelectorAll(".todo").length).toBe(4);
  });

  it("it should add a new todo when text is inputted", () => {});
});
