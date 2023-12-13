const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const {email , password } = require("./config")
const cors = require('cors'); 
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); 
app.post('/send-email', (req,res) => {
    const {nombre, correoRecibido, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: email,
            pass: password
        }
    })

    const mailOptions = {
        nombre: nombre,
        from: correoRecibido,
        to: email,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            return res.status(500).send(err.toString());
        }
        res.status(200).send("Correo enviado :)")
    })
});

app.listen(port, () => {
    console.log("Servidor escuchando en el puerto 3001")
})
