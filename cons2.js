const autos = require('./autos');


const concesionaria = {
    autos: autos,/*.forEach((autos) =>{
    console.log(autos);})*/
    buscarAuto(patente) { //Funcionalidad de buscar auto por medio de la patente.
        let stock = this.autos //inicializar variable, con la listas de coches
        let autoFiltrado = stock.filter((stock) => { // Filtrado comparando autos en stock con la patente solicitada
            return stock.patente == patente  
        });

        if(autoFiltrado.length > 0){ // corroborar si hay datos dentro de la array
            return autoFiltrado[0]
        }else{
            return null
        }

    },
    venderAuto(patente){ // Funcionalidad que busqueda de auto para la venta por medio de la patente 
        autoFiltrado = this.buscarAuto(patente); //Inicializar variable, con el resultado de la funcion bucarAuto
        this.autos.map(function(autos){ 
           autoFiltrado == autos ?  autos.vendido = true : '' //Si la patente del auto coincide con la patente solicitada, su estado cambia a vendido 
           console.log(autos);  
        })
    },
    autosParaLaVenta : function (){ // Funcionalidad que devuelve el listado de autos que se pueden vender 

        let autosNoVendidos = this.autos.filter((stock)=>{ // Inicializar variable, con listado de autos filtradodos por medio de callback
            return stock.vendido != true // filtro corroborando si no esta vendido
        });
        return autosNoVendidos
    },
    autos0KM (){ // Funcionalidad que devuelve listado de autos, que tienen menos de 100km 
        let autosKm =  this.autosParaLaVenta().filter((stock)=>{ // Inicializar variable con el listado filtrado de autosParaLaventa y pasarlo por un filtro nuevo
            return stock.km < 100; // Filtro de autos con menos de 100km
        });
        return autosKm
    },
    autosNuevos(patente){ //Funcionalidad que compara patente con el listado de autos0KM

        let autos0Km = this.autos0KM().filter((stock)=>{  // inicializacion de variable con el listado de auto0KM
            return stock.patente == patente; // Comparación de las patentes de los autos0KM con la patente solicitada
        });
        return autos0Km
    }

}


console.log(concesionaria.autosNuevos('JJK116'));