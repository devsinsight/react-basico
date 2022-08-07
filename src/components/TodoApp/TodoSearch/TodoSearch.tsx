import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.scss'

export const TodoSearch = () => 
{
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
          <input 
            className="TodoSearch" placeholder="Search"
            value={searchValue}
            onChange={onSearchValueChange}
          />
  );
}