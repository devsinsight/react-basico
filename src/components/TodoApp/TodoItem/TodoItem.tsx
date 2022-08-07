import './TodoItem.scss';

interface ITodoItem { 
  todo: { id: number, text: string , complete: boolean },
  onCompleteTodo: Function, 
  onDeleteTodo: Function 
}

export const TodoItem = ({ todo, onCompleteTodo, onDeleteTodo }: ITodoItem) => {

  const onComplete = () => {
    onCompleteTodo(todo.id);
  }

  const onDelete = () => {
    onDeleteTodo(todo.id);
  }

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${todo.complete && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p 
        className={`TodoItem-p ${todo.complete && "TodoItem-p--complete"}`}
      >
        {todo.text}
      </p>
      <span
        className="Icon Icon-delete" 
        onClick={onDelete} >
          X
          </span>
    </li>
  );
};
