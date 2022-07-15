import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  // console.log("TodoApp", intialTodos);
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  // FIXME: remove entirely if no Top Todo
  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todos.length !== 0 && (
            <EditableTodoList todos={todos} update={update} remove={remove} />
          )}
          {todos.length > 0 && (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        <div className="col-md-6">
          (if no top todo, omit this whole section)
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo />
          </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
