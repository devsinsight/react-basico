import { TodoApp } from "./components/TodoApp/TodoApp";
import { TodoProvider } from "./components/TodoApp/TodoContext";

function App() {
  
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  )
}

export default App;
