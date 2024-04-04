import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container my-2">
      <center>
        <h3>Todo List</h3>
      </center>
      {props.todos.length === 0 ? (
        <center>
          <h6>No Todos to Display</h6>
        </center>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.slno} onDelete={props.onDelete} />
            </>
          );
        })
      )}
    </div>
  );
}
