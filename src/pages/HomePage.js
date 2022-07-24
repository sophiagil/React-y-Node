
const HomePage = (props) => {
    return (
    <body>
        <section id="hero">
            <h1>Aprende a crear obras de Arte <br /> con tus manos</h1>
            <button>INSCRÍBETE YA!</button>
        </section>

        <section id="nosotros">
            <div class="container">
                <div class="img-container"></div>
                <div class="descripcion">
                <h2>Somos <span class="color-asento">Iguamkú</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident saepe, consequuntur cum, quidem ratione adipisci officia quo corrupti quis facere ipsam. Eveniet exercitationem nisi officia! Natus assumenda, reiciendis quaerat.</p>
                </div>
            </div>
        </section>

        <section id="actividades">
            <div class="container">
                <h2>Cursos y Talleres</h2>
                <div class="actividad">
                    <div class="card">
                        <h3>Hornos Cerámicos Condorhuasi</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                            <button>+ Info</button>
                    </div>
                    <div class="card">
                        <h3>Taller de Pastas Cerámicas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                            <button>+ Info</button>
                    </div>
                    <div class="card">
                        <h3>Seminario de Instrumentos Prehispánicos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>  
                            <button>+ Info</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="productos">
                <div class="container">
                    <h2>Nuestros Productos</h2>
                    <div class="slider">
                        <ul>
                            <li><img src="./assets/img/Productos/Slide/Slide1.jpg" alt="slide1" /></li>
                            <li><img src="./assets/img/Productos/Slide/Slide2.jpg" alt="slide2" /></li>
                            <li><img src="./assets/img/Productos/Slide/Slide3.jpg" alt="slide3" /></li>
                            <li><img src="./assets/img/Productos/Slide/Slide4.jpg" alt="slide4" /></li>
                        </ul>    
                    </div>
                </div>
    

            <section id="productos-texto">
                <div class="container">
                    <div class="descripcion">
                    <h3>Galería de Compras <span class="color-asento">Iguamku Cerámica</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident saepe, consequuntur cum, quidem ratione adipisci officia quo corrupti quis facere ipsam. Eveniet exercitationem nisi officia! Natus assumenda, reiciendis quaerat.</p>
                    </div>
                </div>
            </section>
    
            <section id="productos-galeria">
                <div class="container">
                    <div class="galeria-items">
                        <div class="item">
                            <h3>Filtros Cerámicos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                                <button>Ver +</button>
                        </div>
                        <div class="item">
                            <h3>Utilitarios Arte y Hogar</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                                <button>Ver +</button>
                        </div>
                        <div class="item">
                            <h3>Instrumentos Musicales</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>  
                                <button>Ver +</button>
                        </div>
                        <div class="item">
                            <h3>Hornos Cerámicos</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>  
                                <button>Ver +</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        
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



export default HomePage;