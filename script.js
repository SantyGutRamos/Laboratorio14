function ejercicio3(){
    let valor=Number(prompt("Ingresar numero"));
    alert("el numero redondeado hacia abajo es: "+Math.floor(valor)+"\n"
+"el numero redondeado hacia arriba es: "+Math.ceil(valor)+"\nel numero redondeado normal es de: "+ Math.round(valor));
return;
}
function ejercicio4(){
   let minimo=Number(prompt("Ingresar valor minimo"));
   let maximo=Number(prompt("Ingresar valor maximo"));
   let numeroalazar=numeroAleatorio(minimo,maximo);
alert("El numero alazar desde "+minimo+" hasta "+maximo+" es de: "+numeroalazar);
}
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ejercicio5() {
    let numero1=numeroAleatorio(1,6); 
     let numero2=numeroAleatorio(1,6);
     let suma=numero1+numero2;
    alert(`La suma del dado 1: ${numero1} más el dado 2: ${numero2} es de: ${suma}`);
}
function ejercicio6() {
    let numero = Number(prompt("Ingrese un número:"));
    let cuadrado = Math.pow(numero, 2);
    let cubo = Math.pow(numero, 3);
    let raizCuadrada = Math.sqrt(numero);
    alert( `Resultados para el número ${numero}:\n` +`Cuadrado: ${cuadrado}\n` + `Cubo: ${cubo}\n` + `Raíz cuadrada: ${raizCuadrada}`);
}
function ejercicio7(){
    let radianes=Number(prompt("Ingresar tu numero en radianes"));
    let grados=Number(prompt("Ingresar tu numero en grados"));
    let conversion1=Radianesagrados(radianes);
    let conversion2=gradosAradianes(grados);
    let seno=Math.seno(grados);
    let coseno=Math.cos(grados)
    alert(`grados a radianes ${conversion2} y de radianes a grados ${conversion1} \n `)

}
  function gradosAradianes(grados){
    let radianes=(Math.PI*grados)/180;
    return radianes;
  }
  function Radianesagrados(radianes){
    let grados=(radianes*180)/Math.PI;
    return grados;
  }
