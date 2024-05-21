//iterador
let palabrita ;
let cant_errores = 0;
let cant_aciertos = 0;

const palabras = [
    // Personajes jugables
    "albedo",
    "alhacén",
    "aloy",
    "amber",
    "itto",
    "arlecchino",
    "baizhu",
    "beidou",
    "bennett",
    "bárbara",
    "candace",
    "charlotte",
    "chevreuse",
    "chiori",
    "chongyun",
    "collei",
    "cyno",
    "dehya",
    "diluc",
    "diona",
    "dori",
    "eula",
    "faruzán",
    "fischl",
    "fréminet",
    "furina",
    "gaming",
    "ganyu",
    "gorou",
    "hutao",
    "jean",
    "kazuha",
    "kaeya",
    "ayaka",
    "ayato",
    "kaveh",
    "keching",
    "kirara",
    "klee",
    "sara",
    "shinobu",
    "laila",
    "lisa",
    "lynette",
    "lyney",
    "mika",
    "mona",
    "nahida",
    "navia",
    "neuvillette",
    "nilou",
    "ningguang",
    "noelle",
    "qiqi",
    "razor",
    "rosaria",
    "sacarosa",
    "sangonomiya kokomi",
    "sayu",
    "shenhe",
    "shikanoin heizou",
    "shogun raiden",
    "tartaglia",
    "thoma",
    "tignari",
    "trotamundos",
    "venti",
    "viajero",
    "wriothesley",
    "xiangling",
    "xianyun",
    "xiao",
    "xingchiu",
    "xinyan",
    "yaemiko",
    "yanfei",
    "yaoyao",
    "yelan",
    "yoimiya",
    "yunjin",
    "zhongli",
    // Próximos personajes anunciados
    "clorinde",
    "dainsleif",
    "sethos",
    "sigewinne",
    // Personajes mencionados
    "iansan",
    "inujin",
    "pierotto",
    "varka",
    "émilie"
];




const btn = id("jugar");
const imagen = id("imagen");
btn.addEventListener("click", iniciar);


function id(str){
    return document.getElementById(str);
}

function obtener_random(num_min,num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar =Math.floor( Math.random()* amplitud_valores);
     + num_min;
     return valor_al_azar;

}

function iniciar(event){
    imagen.src = "assets/img/man1.jpg";
    cant_errores = 0;
    cant_aciertos = 0;

    btn.disabled = true;
    const parrafo = id("adivinarPalabra")
    parrafo.innerHTML = "";
   const cant_palabras = palabras.length
    const valor_al_azar =obtener_random(0, cant_palabras);

    palabrita = palabras[valor_al_azar]
    console.log(palabrita);
    const cant_letras = palabrita.length;

    for(let i = 0; i < cant_letras; i++){
        const span = document.createElement("span")
        parrafo.appendChild(span);

    }

}

const btn_letras = document.querySelectorAll("#letras button")
for(let i = 0; i< btn_letras.length; i++){
    btn_letras[i].addEventListener("click", click_letras);
}

function click_letras(event){
    const spans = document.querySelectorAll("#adivinarPalabra span");
    const button = event.target;
    button.disabled = true
    const letra = button.innerHTML;


    let acerto = false;
    for (let i = 0; i < palabrita.length; i++){
        if(letra == palabrita[i]){
            // posicion de la letra en la palabra
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }

    }

    if(acerto == false){
        cant_errores++;
        const source = `assets/img/man${cant_errores}.jpg`
        const imagen = id("imagen");
        imagen.src = source;
    }

    if (cant_errores == 7){
        id("resultado").innerHTML =("Perdiste, la palabra era " + palabrita);

        game_over();
    }else if(cant_aciertos == palabrita.length){
        id("resultado").innerHTML =("Ganaste!")
        game_over();

    }

    console.log(acerto);
}


function game_over(){
    for(let i = 0; i< btn_letras.length; i++){
        btn_letras[i].disabled = true;
    }
}