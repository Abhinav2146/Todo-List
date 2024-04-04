import React from "react";

export default function TodoItem(props) {
  return (
    <div className="container col-4 my-3">
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          props.onDelete(props.todo);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
}
