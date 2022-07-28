import React from "react";

const ContactoPage = (props) => {
    return (
    <body>
        <section id="hero-contacto">
            <h1>Contacto</h1>
        </section>

        <section id="contacto">
            <div class="contacto-container">
                <form class="form">
                    <p class="form_parrafo">Envía tus consultas por <a href="#" class="form_enlace">aquí</a>. Recibirás un correo electrónico con toda la info!</p>

                    <div class="form_container">
                        <div class="form_group">
                            <label for="name" class="form_label">Nombre:</label>
                            <input type="text" id="name" class="form_input" placeholder=" " />
                            <span class="form_line"></span>
                        </div>
                    </div>

                    <div class="form_container">
                        <div class="form_group">
                            <label for="mail" class="form_label">Correo electrónico:</label>
                            <input type="text" id="email" class="form_input" placeholder=" " />
                            <span class="form_line"></span>
                        </div>
                    </div>

                    <div class="form_container">
                        <div class="form_group">
                            <input type="text" id="tel" class="form_input" placeholder=" " />
                            <label for="tel" class="form_label">Teléfono:</label>
                            <span class="form_line"></span>
                        </div>
                    </div>

                    <div class="form_container">
                        <div class="form_group">
                            <label for="msg" class="form_label">Mensaje:</label>
                            <textarea id="msg" name="mensaje" class="form_textarea" placeholder=" "></textarea>
                            <span class="form_line"></span>
                        </div>
                        <input type="submit" class="submit" value="Enviar" />
                    </div>  
                </form>
            </div>
        </section>   
    </body>
);
}

export default ContactoPage;