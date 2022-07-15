import React, { useState } from "react";
import TodoApp from "./TodoApp";
import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";
import { v4 as uuid } from "uuid";
import { render } from "@testing-library/react";

let renderedApp;
const INITIAL_TODOS = [
    {
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    },
    {
      id: 2,
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    },
    {
      id: 3,
      title: "Go to bed",
      description: "In bed by 11:15",
      priority: 3,
    },
  ]

beforeEach(function () {
  const { container } = render(
    <TodoApp
      initialTodos={INITIAL_TODOS}
    />
  );
  renderedApp = container;
});

describe("TodoApp renders successfullly", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

  it("matches snapshot", function () {
    // const { container } = render(<TodoApp />);
    expect(renderedApp).toMatchSnapshot();
  });

  it("renders full list of todos", function () {
    // const { container, debug } = render(<TodoApp initialTodos={INITIAL_TODOS}/>);
    expect(renderedApp.querySelectorAll(".Todo").length).toEqual(4);
    // expect(renderedApp.container.querySelectorAll(".Todo").length).toEqual(3);
  })
});

// describe("create todos", function () {
//     it("renders")
// })
