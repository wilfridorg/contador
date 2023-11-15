let suma_contador = document.getElementById("suma");
let resta_contador = document.getElementById("resta");
let reset_contador = document.getElementById("reset");
let contador = 0;


suma_contador.addEventListener("click", function(){
    contador = contador + 1;
    document.getElementById("resultado").innerHTML = contador;
})

resta_contador.addEventListener("click", function(){
    contador = contador - 1;
    document.getElementById("resultado").innerHTML = contador;
})

reset_contador.addEventListener("click", function(){
    contador = 0;
    document.getElementById("resultado").innerHTML = contador;
})