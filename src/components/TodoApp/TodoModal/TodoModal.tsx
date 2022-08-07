import ReactDOM from "react-dom";
import './TodoModal.scss';

export const Modal = ({ children }: any) => {

    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>, 
        document.getElementById('modal') as Element
    );
}