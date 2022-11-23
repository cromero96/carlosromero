function bandera(){
    let content = `<article id="ejercicio1">
    <h2>Ejercicio 1: Guatemala</h2>
    <div class="contenedor">
        <div class="parte1"></div>
        <div class="parte3"></div>
        <div class="parte2"><img src="img/guatemala.png" alt="Escudo Guatemala"></div>
    </div>
</article>`;
let insertar = document.getElementById('InsertarContenido');
insertar.innerHTML = content;

    let contenido = `<article id="ejercicio2">    
    <h2>Ejercicio 2:India</h2>
    <div class="contenedor">
        <div class="parte2"></div>
        <div class="parte4"></div>
        <div class="parte6"><img src="img/india.png" alt="Emblema India"></div>
    </div>
</article>`;
let insert = document.getElementById('InsertarContenido');
insert.innerHTML = contenido;

let contenid = `<article id="ejercicio3">
<h2>Ejercicio 3: Paises Bajos</h2>
<div class="contenedor">
    <div id="bajos">
        <div class="parte1"></div>
        <div class="parte2"></div>
        <div class="parte3"></div>
    </div>
</div>
</article>`;
let inserta = document.getElementById('InsertarContenido');
inserta.innerHTML = contenid;

let conteni = `<article id="ejercicio4">
<h2>Ejercicio 4: Suecia</h2>
<div class="contenedor">
    <div id="superior">
        <div class="parte1"></div>
        <div class="parte2"></div>
        <div class="parte3"></div>
    </div>
    <div class="parte4"></div>
    <div id="inferior">
        <div class="parte5"></div>
        <div class="parte6"></div>
        <div class="parte7"></div>
    </div>
</div>
</article>`;
let inser = document.getElementById('InsertarContenido');
inser.innerHTML = conteni;

let cont = `<article id="ejercicio5">
<h2>Ejercicio 5: Suiza</h2>
<div class="contenedor">
    <div class="parte1"></div>
    <div class="parte2"></div>
    <div class="parte3"></div>
</div>
</article>`;
let inse = document.getElementById('InsertarContenido');
inse.innerHTML = cont;
}