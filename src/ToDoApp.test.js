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
];

beforeEach(function () {
  const { container } = render(<TodoApp initialTodos={INITIAL_TODOS} />);
  renderedAppContainer = container;
});

describe("TodoApp renders successfullly", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

  it("matches snapshot", function () {
    expect(renderedAppContainer).toMatchSnapshot();
  });

  it("renders full list of todos plus an extra for TopTodo(pass in 3, expect 4)", function () {
    expect(renderedAppContainer.querySelectorAll(".Todo").length).toEqual(4);
  });
});

//FIXME: still working on
// describe("create todos", function () {
//     it("add created todo to initial list", function () {
//         const newTodo = {
//             id: 4,
//             title: "test",
//             description: "testing",
//             priority: 2,
//           }
//         expect(create(newTodo))
//     })
// })
