import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<header>
			<div class="container">
				<div className="logo">
					<p>Iguamku Cerámica</p>
				</div>
				
				<nav>
					<div className="menu-bar">
							<li><Link to="/nosotros">Sobre Nosotros</Link></li>
							<li><Link to="/actividades">Cursos y Talleres</Link></li>
							<li><Link to="/productos">Nuestros Productos</Link></li>
							<li><Link to="/contacto">Contacto</Link></li>
					</div>
				</nav>
			</div>
  		</header>
    );	
}

export default Header;