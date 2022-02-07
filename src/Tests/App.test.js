import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent, within } from "@testing-library/dom";

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

  it("it should add a new todo when text is inputted and submit pressed", () => {
    // it should render 5 initial todos
    expect(component.container.querySelectorAll(".todo").length).toBe(5);

    // type new todo name
    const newTodoInputTextArea = component.getByLabelText('New todo name');
    fireEvent.change(newTodoInputTextArea, { target: { value: 'remeber to add tests' }})

    // submit new todo
    const submitTodoButton = component.getByLabelText('submit todo');
    userEvent.click(submitTodoButton);

    // there should be 6 todos
    expect(component.container.querySelectorAll(".todo").length).toBe(6);
  });

  it("it should not allow adding an empty todo", () => {
    // it should render 5 initial todos
    expect(component.container.querySelectorAll(".todo").length).toBe(5);

    // submit new todo
    const submitTodoButton = component.getByLabelText('submit todo');
    userEvent.click(submitTodoButton);

    // there should still be 5 todos
    expect(component.container.querySelectorAll(".todo").length).toBe(5);
  });
});
