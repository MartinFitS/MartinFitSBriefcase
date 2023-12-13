import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../static/styles/Formulario.css";

const Formulario = ({ setIsVisible }) => {
    const form = useRef();

    useEffect(() => {
        const handleClose = () => {
            setIsVisible(false);
        };

        const btn_close = document.getElementById("closeModal");
        btn_close.addEventListener("click", handleClose);

        return () => {
            btn_close.removeEventListener("click", handleClose);
        };
    }, [setIsVisible]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_kginulf",
                "template_hyt1mwp",
                form.current,
                "_cL2i_1Zj1CpYbEVH"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    mostrarAlertaExitosa();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    // ... (importaciones y código previo)

    const mostrarAlertaExitosa = () => {
        toast.success('I received your email :)!', {
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: (
                <div className="closeButtonAlert">
                                    <button className="btn_close__alert" onClick={() => setIsVisible(false)}>Close</button>
                </div>

            ),
            style: {
                display: "block",
                height: "auto",
                color: "fff",
                background: '#140e1a',
                border: '2px solid #fff',
                width: '50%', // Ancho de la alerta
                textAlign: 'center', // Alinear el contenido al centro
                zIndex: 10000, // Z-index alto para asegurar que esté encima de otros elementos
                width: "100%",
            },
        });
    };
// ... (código posterior)

    return (
        <div className="formulario" id="formMail">
            <form ref={form} onSubmit={sendEmail}>
                <div className="cerrar" id="closeModal">
                    X
                </div>
                <div className="textForm">
                    <h3>Write an email!</h3>
                </div>
                <div className="contactLineDiv">
                    <div className="nameField">
                        <p className="ipForm">N A M E*</p>
                        <input type="text" name="user_name" required />
                    </div>
                    <div className="emailField">
                        <p className="ipForm">E M A I L*</p>
                        <input type="email" name="user_email" required />
                    </div>
                </div>
                <div className="subjectLineDiv">
                    <p className="ipForm">S U B J E C T*</p>
                    <input type="text" name="subject" required />
                </div>
                <div className="messageDiv">
                    <p className="ipForm">M E S S A G E*</p>
                    <textarea name="message" required />
                </div>
                <button className="sendFormButton">S E N D</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Formulario;
