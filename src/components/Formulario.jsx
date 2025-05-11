import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../static/styles/Formulario.css";

const Formulario = ({ setIsVisible }) => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                "service_kginulf",
                "template_hyt1mwp",
                form.current,
                "_cL2i_1Zj1CpYbEVH"
            )
            .then(
                () => {
                    setIsSending(false);
                    form.current.reset();
                    setShowModal(true);
                },
                (error) => {
                    console.error("Email error:", error.text);
                    alert("Something went wrong. Please try again.");
                    setIsSending(false);
                }
            );
    };

    const handleClose = () => {
        setShowModal(false);
        setIsVisible(false);
    };

    return (
        <div className="formulario" id="formMail">
            <form ref={form} onSubmit={sendEmail}>
                <div className="cerrar" onClick={() => setIsVisible(false)}>
                    X
                </div>
                <div className="textForm">
                    <h3>Write An Email!</h3>
                </div>
                <div className="contactLineDiv">
                    <div className="nameField">
                        <label className="ipForm" htmlFor="user_name">N A M E*</label>
                        <input id="user_name" type="text" name="user_name" required />
                    </div>
                    <div className="emailField">
                        <label className="ipForm" htmlFor="user_email">E M A I L*</label>
                        <input id="user_email" type="email" name="user_email" required />
                    </div>
                </div>
                <div className="subjectLineDiv">
                    <label className="ipForm" htmlFor="subject">S U B J E C T*</label>
                    <input id="subject" type="text" name="subject" required />
                </div>
                <div className="messageDiv">
                    <label className="ipForm" htmlFor="message">M E S S A G E*</label>
                    <textarea id="message" name="message" required />
                </div>
                <button className="sendFormButton" type="submit" disabled={isSending}>
                    {isSending ? "SENDING..." : "SEND"}
                </button>
            </form>

            {showModal && (
                <div className="custom-modal">
                    <div className="custom-modal-content">
                        <h2>Email Sent!</h2>
                        <p>Thanks for reaching out. I'll get back to you soon :)</p>
                        <button className="closeModalBtn" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Formulario;
