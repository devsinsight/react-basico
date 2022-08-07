import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.scss'

export const TodoCounter = () => {
    const { totalTodos, completedTodos } = useContext(TodoContext)
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}