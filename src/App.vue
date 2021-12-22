<template>
  <div id="app">
    <header>
    <div id="nav">
      <nav class="navbar navbar-expand-lg">
		<div class="container">
		  <router-link class="navbar-brand fw-bold " to="/">Inicio</router-link>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <img class= "lista" src="./assets/lista.png" alt="lista">
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- aqui en ul se configura el responsive -->

			<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
			  <li class="nav-item">
				<router-link class="nav-link active" aria-current="page" to="/Sobremi">Sobre mí</router-link>
			  </li>
			  <li class="nav-item">
				<router-link class="nav-link" to="/About">Habilidades</router-link>
			  </li>
			<li class="nav-item">
			  <router-link class="nav-link" to="/Estudios">Estudios</router-link>
			</li>
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/Contacto">Emprendimiento</router-link>
      </li>
      </ul>
			</div>
		</div>
	  </nav>
    </div>
    <router-view/>
    </header>
    <footer>derechos reserjedfhsdjkhdsfjkhdjklfdsfhj</footer>
  </div>
</template>


<style>

body{
    font-family: 'Oswald', sans-serif;
    background:#000000
}
h1,a, h4{
    color:#e9dcea;
    font-weight: bold;
}
nav{
    font-size: 18px;
    background:#000000;
    font-style:italic;

}
p{
    margin: 15px;
}
.nav-link{
    border-width: 2px;
    color: #e9dcea;
    border-radius: 7px;
}

.salmon{
    background-color: #e9dcea;
}
.progress{
    height: 30px;
    border-radius: 10px;
    transition: all 1s ease;
}
.progress:hover{
    transform: scale(1.0);
}
.progress-bar{
  background: #a989bd;
}
.lista{
  height: 35px;
  display: auto; 
}
</style>
