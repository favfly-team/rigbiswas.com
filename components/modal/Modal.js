import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr'

const Modal = ({ setIsModal }) => {
    const [modalValue, setModalValue] = useState({
        mobile: '',
        email: '',
        isChecked: false
    });

    const inputChange = (e)=>{
       setModalValue({
           ...modalValue,
           [e.target.name] : e.target.value
       })
    };

    const checkboxChange = (e)=>{
       setModalValue({
           ...modalValue,
           isChecked: e.target.checked
       })
    };

    const submitClicked = ()=>{
        console.log('submitClicked');
    }

    return (
        <>
            <div className="modal_box">
                <div className="modal_container">
                    <div className="modal_content">
                        <span className="modal_close_icon" onClick={() => setIsModal(false)}><GrClose size={22} /></span>
                        <div className="moadl_body d-flex">
                            <div className="per_input_box">
                                <input type="text" className="modal_input" placeholder="Mobile" name="mobile"
                                value={modalValue.mobile}
                                onChange={inputChange}
                                />
                            </div>
                            <div className="per_input_box">
                                <input type="text" className="modal_input" placeholder="Email" name="email"
                                 value={modalValue.email}
                                 onChange={inputChange}
                                />
                            </div>
                        </div>
                        <div className="input_checkbox">
                            <input type="checkbox" id="input_ch"
                             value={modalValue.isChecked}
                             onChange={checkboxChange}
                            />
                            <label htmlFor="input_ch" className="checkbox_label">Wedding related</label>
                        </div>
                        <button className="input_btn" onClick={submitClicked}>Start Planning</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal