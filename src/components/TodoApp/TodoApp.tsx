import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoCreateButton } from "./TodoCreateButton/TodoCreateButton";
import { TodoForm } from "./TodoForm/TodoForm";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoList } from "./TodoList/TodoList";
import { Modal } from "./TodoModal/TodoModal";
import { TodoSearch } from "./TodoSearch/TodoSearch";

export const TodoApp = () => {
  const { searchedTodos, onCompleteTodo, onDeleteTodo, openModal, setOpenModal } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {searchedTodos.map((t: any, i: number) => (
          <TodoItem
            key={i}
            todo={t}
            onCompleteTodo={onCompleteTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </TodoList>

      { openModal && 
        <Modal>
            <TodoForm/>
        </Modal>
      }

      <TodoCreateButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};
