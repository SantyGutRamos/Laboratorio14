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
// ==========================
//  EJERCICIO 8
// ==========================
function ejercicio8() {
    let contraseña = "";
    for (let i = 0; i < 6; i++) {
        let digito = numeroAleatorio(0, 9);
        contraseña += digito;
    }
    alert("Tu contraseña numérica aleatoria de 6 dígitos es: " + contraseña);
}

// ==========================
//  EJERCICIO 9
// ==========================
function ejercicio9() {
    let x1 = Number(prompt("Ingrese x1:"));
    let y1 = Number(prompt("Ingrese y1:"));
    let x2 = Number(prompt("Ingrese x2:"));
    let y2 = Number(prompt("Ingrese y2:"));

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let origen1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let origen2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let sumaOrigen = origen1 + origen2;

    alert("La distancia entre los puntos es: " + distancia.toFixed(2) +
          "\nSuma de distancias al origen: " + sumaOrigen.toFixed(2));
}

// ==========================
//  EJERCICIO 10
// ==========================
function ejercicio10() {
    let cantidad = Number(prompt("¿Cuántas calificaciones vas a ingresar?"));
    let notas = [];
    for (let i = 0; i < cantidad; i++) {
        notas.push(Number(prompt("Ingrese la nota " + (i + 1))));
    }

    let maximo = Math.max(...notas);
    let normalizadas = [];
    for (let i = 0; i < notas.length; i++) {
        normalizadas.push((notas[i] / maximo).toFixed(2));
    }

    alert("Notas originales: " + notas.join(", ") + 
          "\nNotas normalizadas (0 a 1): " + normalizadas.join(", "));
}

// ==========================
//  EJERCICIO 11 (sin stock)
// ==========================
class Producto {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.precio = precio;
    }

    set precio(valor) {
        if (valor > 0) {
            this.#precio = valor;
        } else {
            alert("El precio debe ser mayor a 0");
        }
    }

    get precio() {
        return this.#precio;
    }

    mostrarProducto() {
        alert("Producto: " + this.#nombre + "\nPrecio: " + this.#precio);
    }
}

function ejercicio11() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));
    let producto1 = new Producto(nombre, precio);
    producto1.mostrarProducto();
}

// ==========================
//  EJERCICIO 12 (sin stock)
// ==========================
class Producto2 {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.precio = precio;
    }

    set precio(valor) {
        valor = Number(valor);
        if (valor > 0) {
            this.#precio = valor;
        } else {
            alert("Precio inválido");
        }
    }

    get precio() {
        return "$" + this.#precio.toFixed(2);
    }

    mostrarProducto() {
        alert("Producto: " + this.#nombre + "\nPrecio: " + this.precio);
    }
}

function ejercicio12() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = prompt("Ingrese el precio (número o texto):");
    let p = new Producto2(nombre, precio);
    p.mostrarProducto();
}

// ==========================
//  EJERCICIO 13
// ==========================
class Figura {
    area() { return 0; }
    perimetro() { return 0; }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }

    perimetro() {
        return this.lado * 4;
    }
}

class Triangulo extends Figura {
    constructor(base, altura, lado) {
        super();
        this.base = base;
        this.altura = altura;
        this.lado = lado;
    }

    area() {
        return (this.base * this.altura) / 2;
    }

    perimetro() {
        return this.base + this.lado * 2;
    }
}

function ejercicio13() {
    let cuadrado = new Cuadrado(4);
    let triangulo = new Triangulo(3, 5, 4);
    alert("Área Cuadrado: " + cuadrado.area() + 
          "\nPerímetro Cuadrado: " + cuadrado.perimetro() +
          "\nÁrea Triángulo: " + triangulo.area() + 
          "\nPerímetro Triángulo: " + triangulo.perimetro());
}

// ==========================
//  EJERCICIO 14 y 15
// ==========================
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return "Nombre: " + this.nombre + "\nEmail: " + this.email;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivel) {
        super(nombre, email);
        this.nivel = nivel;
    }

    mostrarInfo() {
        return super.mostrarInfo() + "\nNivel de fidelidad: " + this.nivel;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo() {
        return super.mostrarInfo() + "\nPermisos: " + this.permisos;
    }
}

function ejercicio15() {
    let usuarios = [
        new Cliente("Ana", "ana@mail.com", 4),
        new Administrador("Carlos", "carlos@mail.com", "crear, editar, eliminar")
    ];

    for (let usuario of usuarios) {
        alert(usuario.mostrarInfo());
    }
}

// ==========================
//  EJERCICIO 16
// ==========================
class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }

    calcularSueldo() {
        return this.sueldoBase * 1.10;
    }
}

class ProgramadorSenior extends Programador {
    calcularSueldo() {
        return this.sueldoBase * 1.25;
    }
}

function ejercicio16() {
    let p1 = new Programador("Juan", 1000, "JavaScript");
    let p2 = new ProgramadorSenior("Lucía", 1500, "Python");
    alert("Sueldo Programador: " + p1.calcularSueldo() +
          "\nSueldo Senior: " + p2.calcularSueldo());
}

// ==========================
//  EJERCICIO 17
// ==========================
class Cuenta {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(monto) {
        this.#saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.#saldo) {
            this.#saldo -= monto;
        } else {
            alert("Fondos insuficientes");
        }
    }
}

class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto <= this.saldo) {
            super.retirar(monto);
        } else {
            alert("Saldo insuficiente. No se permite sobregiro.");
        }
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limite) {
        super(saldoInicial);
        this.limite = limite;
    }

    retirar(monto) {
        if (monto <= this.saldo + this.limite) {
            super.retirar(monto);
        } else {
            alert("Límite de sobregiro excedido.");
        }
    }
}

function ejercicio17() {
    let ahorro = new CuentaAhorro(500);
    let corriente = new CuentaCorriente(300, 200);
    ahorro.depositar(100);
    ahorro.retirar(200);
    corriente.retirar(450);
    alert("Saldo Ahorro: " + ahorro.saldo + "\nSaldo Corriente: " + corriente.saldo);
}

// ==========================
//  EJERCICIO 18
// ==========================
class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, precio) {
        this.productos.push({ nombre: nombre, precio: precio });
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio;
        }
        return total;
    }

    mostrarResumen() {
        let resumen = "";
        for (let i = 0; i < this.productos.length; i++) {
            resumen += this.productos[i].nombre + " - $" + this.productos[i].precio + "\n";
        }
        alert("Productos en el carrito:\n" + resumen +
              "Total: $" + this.calcularTotal());
    }
}

function ejercicio18() {
    let carrito = new Carrito();
    carrito.agregarProducto("Camisa", 25);
    carrito.agregarProducto("Pantalón", 40);
    carrito.mostrarResumen();
}

// ==========================
//  EJERCICIO 19
// ==========================
class Notificacion {
    enviar() {
        alert("Enviando notificación general");
    }
}

class Email extends Notificacion {
    enviar() {
        alert(" Enviando notificación por Email");
    }
}

class SMS extends Notificacion {
    enviar() {
        alert("Enviando notificación por SMS");
    }
}

class Push extends Notificacion {
    enviar() {
        alert("Enviando notificación");
    }
}

function ejercicio19() {
    let lista = [new Email(), new SMS(), new Push()];
    for (let i = 0; i < lista.length; i++) {
        lista[i].enviar();
    }
}
