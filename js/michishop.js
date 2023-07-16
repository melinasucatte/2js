//MICHISHOP PARA LOS AMANTES DE LOS MICHIS
//CONTRUIR ARRAY CON PRODUCTOS

class michiProductos{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}

//PRODUCTOS MICHI

const comida= new michiProductos("COMIDA PARA GATOS",3500);
const piedras= new michiProductos("PIEDRAS PARA GATO",500);
const literaYPala= new michiProductos("LITERA Y PALA",1500);
const collar= new michiProductos("COLLAR",3500);
const chapita= new michiProductos("CHAPITA",3500);
const juguetes= new michiProductos("JUEGUETE PARA GATOS",3500);
const transportadora= new michiProductos("TRANSPORTADORA",2500);
const cama= new michiProductos("CAMA PARA GATOS",5000);
const rascador= new michiProductos("RASCADOR PARA GATOS",3500);
const comedero= new michiProductos("COMEDERO",700);

//ARRAY PRODUCTOS
const productosMichi=[comida, piedras, literaYPala,collar,chapita,juguetes,transportadora,cama,rascador,comedero];

//ARRAY CARRITO
let carrito=[];

//ACUMULADOR CARRITO
let totalCompra=0;

//INICIAR BUCLE
let inicio= true;

//REGISTRO USUARIO
let registroUsuario=[];

//BIENVENIDA
alert("¡BIENVENIDO A MICHISHOP!");

//BUCLE WHILE
while(inicio){
    //OPCIONES AL USUARIO
    let bienvenida=parseInt(prompt("INGRESE UNA OPCION \n 1:REGISTRAR USUARIO \n 2:INGRESAR USUARIO \n 3:INICIAR COMPRA \n 4:SALIR DE LA TIENDA "));
    if(bienvenida === 1){
        alert("REGISTRAR");

        class Login{
            constructor(usuario, contrasenia){
                this.usuario=usuario;
                this.contrasenia=contrasenia;
            }
        }
        function ingresarDatos(){
            let usuario= prompt("REGISTRE USUARIO:");
            console.log(usuario);
            let contrasenia=prompt("REGISTRE CONTRASEÑA:")
            console.log(contrasenia);
            const nuevoUsuario= new Login(usuario, contrasenia);
            registroUsuario.push(nuevoUsuario);
        }
        
        ingresarDatos();
        console.log(registroUsuario);
    }else if(bienvenida=== 2){
        alert("INGRESE SUS DATOS DE USUARIO");
        //COMPROBAR USUARIO
        function buscarRegistroUsuario(confirmarUsuario){
            let ingresoUsuario=prompt("INGRESE USUARIO:");
            return confirmarUsuario.usuario === ingresoUsuario;
        }
        let verificarUsuario= registroUsuario.find(buscarRegistroUsuario);
        console.log(verificarUsuario);
        if(verificarUsuario == undefined){
            alert("ESTE USUARIO NO EXISTE");
        }else{
            function buscarRegistroContasenia(confirmarContrasenia){
                let ingresoContrasenia=prompt("INGRESE CONTRASEÑA:");
                console.log(ingresoContrasenia);
                return confirmarContrasenia.contrasenia === ingresoContrasenia;
            }
        }
        let verificarContrasenia= registroUsuario.find(buscarRegistroContasenia);
        if(verificarContrasenia == undefined){
            alert("CONTRASEÑA INCORRECTA");

        }else{
            alert("INGRESO ACEPTADO, YA PUEDE REALIZAR SU COMPRA!");

        }
    }else if(bienvenida=== 3){
        alert("INICIAR COMPRA");
        let inicioCompra=true;
        while(inicioCompra){
            let opciones= parseFloat(prompt("ELIJA UNA OPCION: \n 1:VER LISTA DE PRODUCTOS \n 2:AÑADIR AL CARRITO \n 3: FINALIZAR COMPRA \n 4:SALIR DE MICHISHOP"));
            //ALMACENAR PRODUCTOS
            let listaDeProductos = "";
            //CONTADOR PARA LA POSISCION DE LOS PRODUCTOS
            let i = 1;
            //FOREACH PARA MOSTRAR LISTA DE PRODUCTOS
            productosMichi.forEach( (item)=> {
                listaDeProductos += `${i} - ${item.nombre} $${item.precio}\n`;
                i++;
            });

            console.log(listaDeProductos.length);
            //OPCION 1 MOSTRAR LISTA DE PRODUCTOS
            if(opciones=== 1){

                alert(`LISTA DE PRODUCTOS DE MICHISHOP: \n ${listaDeProductos}`);

            }//OPCION 2 AÑADIR AL CARRITO
            else if(opciones===2){
                //AÑADIR CARRITO
                let agregarProducto=true;
                while(agregarProducto){
                    let seleccion=parseInt(prompt(`INGRESE NUMERO DE PRODUCTO: \n ${listaDeProductos} 11-FINALIZAR COMPRA`));
                    console.log(seleccion);
                    //SWITCH PARA OPCIONES
                    switch(seleccion){
                        case 1: 
                            carrito.push(comida);
                            break;
                        case 2:
                            carrito.push(piedras);
                            break;
                        case 3:
                            carrito.push(literaYPala);
                            break;
                        case 4:
                            carrito.push(collar);
                            break;
                        case 5:
                            carrito.push(chapita);
                            break;
                        case 6:
                            carrito.push(juguetes);
                            break;
                        case 7:
                            carrito.push(transportadora);
                            break;
                        case 8:
                            carrito.push(cama);
                            break;
                        case 9:
                            carrito.push(rascador);
                            break;
                        case 10:
                            carrito.push(comedero);
                            break;
                        case 11:
                            agregarProducto = false;
                            break;
                        default:
                            alert("ESA OPCION NO EXISTE POR FAVOR INGRESE UN NUMERO DEL 1 AL 11 PARA CONTINUAR SU COMPRA!");
                            break;
                    }
                }
            }//OPCION 3 FINALIZAR COMPRA
            else if(opciones=== 3){
                //MOSTRAR PRODUCTOS CARRITO
                carrito.sort((a, b) => b.precio - a.precio);

                let carritoCompras="Carrito: \n"

                carrito.forEach((item)=> {
                    carritoCompras+=`${item.nombre} - $${item.precio}\n`;
                    totalCompra+=item.precio;
                })
        
                carritoCompras+=`TOTAL: $ ${totalCompra}`

                let totalAPagar=parseFloat(prompt(carritoCompras + "INGRESE CON CUANTO VA A PAGAR:"));

                if(totalAPagar>=totalCompra){
                    if(totalAPagar===totalCompra){
                        alert("GRACIAS POR SU COMPRA!");
                        carrito=[];
                        totalCompra=0;
                    }else{
                        let vuelto=totalAPagar-totalCompra;
                        alert("SU VUELTO ES DE: $ "+ vuelto );
                        carrito=[];
                        totalCompra=0;
                    }        
                }else if(totalAPagar<totalCompra){
                    alert("SALDO INSUFIFICIENTE");
                    totalAPagar=parseFloat(prompt(carritoCompras + "INGRESE CON CUANTO VA A PAGAR:"));
                    if(totalAPagar===totalCompra){
                        alert("GRACIAS POR SU COMPRA! VUELVA PRONTO");
                        carrito=[];
                        totalCompra=0;
                    }else{
                        let vuelto=totalAPagar-totalCompra;
                        alert("SU VUELTO ES DE: $ "+ vuelto );
                        carrito=[];
                        totalCompra=0;
                    }
                }
        

            }else if(opciones ===4 ){
                    inicioCompra = false;
            }else{ alert("OPCION INVALIDA");}
        }
    }else if(bienvenida === 4){
        inicio=false;
    }else{
        alert("INGRESE UNA OPCION 1 , 2 , 3 O 4");
    }
}
alert("GRACIAS POR COMPRAR EN MICHISHOP");