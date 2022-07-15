const ProductosPage = (props) => {
	return (
		<div className="contenedor">
    		<p>Pagina Productos:</p>

			<section id="productos">
    			<div class="container">
					<h2>Nuestros Productos</h2>
					<div class="slider">
                		<ul>
							<li><img src="../public/img/Productos/Slide/Slide1.jpg" alt="slide1" /></li>
							<li><img src="../public/img/Productos/Slide/Slide2.jpg" alt="slide2"/></li>
							<li><img src="../public/img/Productos/Slide/Slide3.jpg" alt="slide3"/></li>
							<li><img src="../public/img/Productos/Slide/Slide4.jpg" alt="slide4"/></li>
                		</ul>
    				</div>
    			</div>
			</section>

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
		</div>
    );	
}

export default ProductosPage;