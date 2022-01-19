import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

const Modal = ({ show, showModal }) => {
    const [ hover, setHover ] = useState(true);

    return ( 
        <div className={show === false ? 'hidden' : 'modal_container'}>
            <div className="modal">
                {/* Close Button */}
                <button onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)} onClick={() => showModal()} className="close-btn">{hover ?<IoIosCloseCircleOutline className="icon" /> : <IoIosCloseCircle className="icon" />}</button>

                {/* Modal Title */}
                <div className="modal_title">
                    <h2 className="modal_title__text">Request an invite!</h2>
                </div>

                {/* Form */}
                <div className="modal_form">
                    <form className="form-label form-css-label">
                        <fieldset>
                        <input id="firstName" name="firstName" type="text" autoComplete="off" required />
                        <label htmlFor="firstName">First Name</label>
                        </fieldset>
                        <fieldset>
                        <input id="lastName" name="lastName" type="text" autoComplete="off" required />
                        <label htmlFor="lastName">Last Name</label>
                        </fieldset>
                        <fieldset>
                        <input id="email" name="email" type="text" autoComplete="off" required />
                        <label htmlFor="email">Email Address</label>
                        </fieldset>
                    </form>

                    <form className="form-label form-css-label">
                        <fieldset>
                        <input id="username" name="username" type="text" autoComplete="off" required />
                        <label htmlFor="username">Username</label>
                        </fieldset>
                        <fieldset>
                        <input id="password" name="password" type="password" autoComplete="off" required />
                        <label htmlFor="password">Password</label>
                        </fieldset>
                        <fieldset>
                        <input id="cpassword" name="cpassword" type="password" autoComplete="off" required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        </fieldset>
                    </form>
                </div>

                {/* Button */}
                <div className="cta request_btn">
                    <button onClick={() => showModal()} className="cta_btn">Send Request</button>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;