let palabra;
let cant_errores = 0; //cuantes veces me equivoque  
let cant_aciertos = 0; // cuantas letras acerte

const palabras = [
    'hamburguesa',
    'programacion',
    'hamburguesa',
    'olimpia',
    'programando',
    'internet',
    'computadora',
    'partido',
    'cuaderno',
    'boligrafo',
    'agua',
    'carpeta',
    'manzana',
    'automovil',
    'fotografia',
    'alimento',   
];

const btn = document.getElementById('jugar');
const images = id ('imagen')
const btn_letras = document.querySelectorAll( "#letras button" );

btn.addEventListener('click', iniciar); /*click en iniciar el juego */

function id(str ){
    return document.getElementById(str);
}

function obtener_random(num_min, num_max){
    const amplitud_valores =num_max - num_min;
    const valor_al_azar= Math.floor(Math.random()*amplitud_valores) + num_min;  
return valor_al_azar;

}

function iniciar(event){
    imagen.src = 'images/images1.jpg'
    
    btn.disabled = true;
    cant_errores = 0; //cuantes veces me equivoque  
    cant_aciertos = 0;
    const parrafo= id ('palabra_a_adivinar');
    parrafo.innerHTML='';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);
    
    palabra= palabras[valor_al_azar];
    console.log(palabra);
    const cant_letras =palabra.length;

    for( let i=0 ; i< btn_letras.length ; i++){
        btn_letras [ i ].disabled = false
    }

    for( let i = 0; i < cant_letras; i++){
        const span=document.createElement('span');
        parrafo.appendChild(span);
    }
}

    /* click de adivinar letra */
    for(let i=0; i <btn_letras.length; i++ ){
    btn_letras[i].addEventListener('click', click_letras);

}

function click_letras(event){
    const spans= document.querySelectorAll('#palabra_a_adivinar span');
   const button = event.target;
   button.disabled= true;
   const letras= button.innerHTML.toLocaleLowerCase ( );
   const palabras=palabra.toLocaleLowerCase( );

    let acerto= false;
    for (let i=0 ; i <palabra.length; i++){
        //la varibale i es la posicion de la letra en la palabra
    //que coincide con el span al que tenemos que mostrarle esa letra
        if(letras == palabra[i]){
            spans[i].innerHTML= letras;
            cant_aciertos++;
            acerto=true;
        }
    }

        if (acerto == false ){
                cant_errores++;
                const source = `images/images${cant_errores}.jpg`
                const imagen =id('images');
                images.src = source
            }


        if( cant_errores == 5 ){
            id('resultado').innerHTML ="Perdiste, la palabra era " + palabra;
            game_over( );
        }else if( cant_aciertos == palabra.length ){
            id('resultado').innerHTML = "FELICIDADES!";
            game_over( );
        }
        console.log( "la letra " + letras + " en la palabra " + palabra + " ¿existe?: " + acerto );
}
    /* fin del juego */
    function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btn.disabled = false;
}


    game_over( );

        





