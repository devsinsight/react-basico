import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { useLocalStorage } from "../../../common/hooks/CustomLocalStorageHook";

const defaultValue: {
  todos: [];
  completedTodos: number;
  searchedTodos: [],
  totalTodos: number;
  searchValue: string;
  openModal: boolean;
  setSearchValue: Dispatch<SetStateAction<string>>;
  onCompleteTodo: Function;
  onDeleteTodo: Function;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  addTodo: Function;
} = {
  todos: [],
  completedTodos: 0,
  searchedTodos: [],
  totalTodos: 0,
  searchValue: "",
  openModal: false,
  setSearchValue: () => {},
  onCompleteTodo: () => {},
  onDeleteTodo: () => {},
  setOpenModal: () => {},
  addTodo: () => {},
};

const TodoContext = createContext(defaultValue);

const TodoProvider = ({ children }: { children: any }) => {
  const [todos, setTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((x: any) => x.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  const onCompleteTodo = (id: number) => {
    const newTodos = [...todos];
    let index = newTodos.findIndex((x) => x.id === id);
    newTodos[index].complete = true;
    setTodos(newTodos);
  };

  const onDeleteTodo = (id: number) => {
    const newTodos = [...todos];
    let index = newTodos.findIndex((x) => x.id === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = (text: string) => {
    let newTodos = [...todos];
    let ids: number[] = todos.length ? todos.map((x: any) => Number(x.id) ) : [0];
    let newId = Math.max(...ids)  + 1;

    newTodos.push({
      id: newId,
      text: text,
      complete: false,
    });

    setTodos(newTodos);
  };

  if (!searchValue.length) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo: any) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        completedTodos,
        searchedTodos,
        totalTodos,
        searchValue,
        openModal,
        setSearchValue,
        onCompleteTodo,
        onDeleteTodo,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
