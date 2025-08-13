document.addEventListener("DOMContentLoaded", function (){
    const div = document.querySelector('div');
    div.addEventListener("click", function(){
        alert('Hola! Soy el div');
    });
    
    const boton = document.getElementById('btn');
    boton.addEventListener("click", function(event) {
        event.stopPropagation();
        alert("Hola!");
    })
});