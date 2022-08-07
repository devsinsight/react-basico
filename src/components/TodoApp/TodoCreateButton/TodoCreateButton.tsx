
import './TodoCreateButton.scss';

export const TodoCreateButton = ({setOpenModal}: any) => {

  const handleCreate = () => {
    setOpenModal((prevState: boolean) => !prevState);
  }

  return (
    <button 
      className="TodoCreateButton"
      onClick={handleCreate}
      >
        +
      </button>
  );
}