import React from 'react';

export default (props) => (
  <form>
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      value={props.currentTodo}
      onChange={props.handleNewTodoChange}
      autoFocus
    />
  </form>
);
