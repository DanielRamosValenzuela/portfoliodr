import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "emailjs-com";
import "./contact.scss";

export const Contact = ({ lenguage }) => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g0s9sp8",
        "template_5revzbd",
        e.target,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage(true);
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="contactBackground">
        <div className="contactForm">
          {lenguage === true ? (
            <h1>
              <img src="assets/contact.png" alt="contáctame" /> Contact me
            </h1>
          ) : (
            <h1>
              <img src="assets/contact.png" alt="contáctame" /> Contáctame
            </h1>
          )}

          <Card
            style={{ maxWidth: 850, margin: "0 auto", padding: "20px 5px" }}
          >
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="name"
                      label={
                        lenguage === true ? "Full name" : "Nombre completo"
                      }
                      placeholder={
                        lenguage === true
                          ? "Enter your full name"
                          : "Introduzca su nombre completo"
                      }
                      fullWidth
                      variant="standard"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      placeholder={
                        lenguage === true
                          ? "Enter your email"
                          : "Introduzca su email"
                      }
                      fullWidth
                      variant="standard"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="phone"
                      label={lenguage === true ? "Phone" : "Teléfono"}
                      type="Teléfono"
                      placeholder={
                        lenguage === true
                          ? "Enter your phone"
                          : "Introduzca su teléfono"
                      }
                      fullWidth
                      variant="standard"
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label={lenguage === true ? "Message" : "Mensaje"}
                      placeholder={
                        lenguage === true
                          ? "Write your message"
                          : "Escriba su mensaje"
                      }
                      fullWidth
                      variant="filled"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {lenguage === true ? (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Send
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Envíar
                      </Button>
                    )}
                  </Grid>
                  {message && (
                    <Grid item xs={12}>
                      {lenguage === true ? (
                        <Typography style={{ color: "green" }}>
                          Thank you very much for contacting me, I will answer
                          you before 24 hours.
                        </Typography>
                      ) : (
                        <Typography style={{ color: "green" }}>
                          Muchas gracias por contactarme, te responderé antes de
                          24 horas.
                        </Typography>
                      )}
                    </Grid>
                  )}
                </Grid>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
