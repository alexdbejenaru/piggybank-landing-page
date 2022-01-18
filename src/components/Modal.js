const Modal = ({ show, showModal }) => {
    return ( 
        <div className={show === false ? 'hidden' : 'modal_container'}>
            <div className="modal">
                <button onClick={() => showModal()} className="cta">Close</button>
                <div className="modal_title">Hei</div>
                <div className="modal_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, doloribus.</div>
                <button className="cta">Send Request</button>
            </div>
        </div>
     );
}
 
export default Modal;