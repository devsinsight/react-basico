import './TodoList.scss';

export const TodoList = ({ children }: { children: any }) => {

    return (
       <section>
        <ul>
            {children}
        </ul>
       </section>
    )
}