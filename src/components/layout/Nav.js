import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav>
			<div className="menu-bar">
			
			Esto es el menu: (ver archivo Nav.js)
			</div>
    	</nav>
    );
}

export default Nav;

/*linea 8: deberia escribir <a href="#" class="btn_menu" id="btn_menu"><i class="fa-solid fa-bars"></i></a> 
// No se como traer el boton// */

/*Linea 9 en adelante:   
			  <li><link to="/">HomePage</link></li>
    		  <li><link to="/nosotros">Sobre Nosotros</link></li>
    		  <li><link to="/actividades">Cursos y Talleres</link></li>
    		  <li><link to="/productos">Nuestros Productos</link></li>
    		  <li><link to="/contacto">Contacto</link></li> 
Si agrego este codigo deja de funcionar React, error es 
"Line 3-10: 'Link' is defined but never used no-used-vars"*/
