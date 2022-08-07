import { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.scss';

export const TodoForm = () => {

  const [newTodoValue, setNewTodoValue] = useState('');
  const {addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};
