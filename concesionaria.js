const autos = require('./autos');
const personas = require('./personas')


const concesionaria = {
    autos: autos,
    personas : personas,
    buscarAuto(patente) { //  
        let stock = this.autos
        let autoFiltrado = stock.filter((stock) => {
            return stock.patente == patente  
        });

        if(autoFiltrado.length > 0){
            return autoFiltrado[0]
        }else{
            return null
        }

    },
    venderAuto(patente){
        autoFiltrado = this.buscarAuto(patente);
        this.autos.map(function(autos){
           autoFiltrado == autos ?  autos.vendido = true : ''
        })
    },
    autosParaLaVenta : function (){

        let autosNoVendidos = this.autos.filter((stock)=>{
            return stock.vendido != true
        });
        return autosNoVendidos
    },
    autos0KM (){
        let autosKm =  this.autosParaLaVenta().filter((stock)=>{
            return stock.km < 100;
        });
        return autosKm
    },
    autosNuevos(patente){

        let autos0Km = this.autos0KM().filter((stock)=>{  
            return stock.patente == patente; 
        });
        return autos0Km
    },
    listaDeVentas (){
        let b = [];
        let autosVendidos =  this.autos.filter(stock => stock.vendido == true); //funciona
        b.push(autosVendidos.map(stock => stock.precio));
        return b[0] // como  hizo kenet
    },
    totalDeVentas (){
        let ventas = this.listaDeVentas();
        let total = 0;
        if(ventas.length > 0){ 
         total = ventas.reduce(function(acum,elem){ 
         return acum + elem});
        }
        return total
    },
    puedeComprar (auto,persona){
        let pagoPorCuota = auto.precio/auto.cuotas;
        if (pagoPorCuota <= persona.capacidadDePagoEnCuotas && auto.precio <= persona.capacidadDePagoTotal){ // nose pq pide && y no ||
            //this.venderAuto(auto.patente)
            return true;
        }
         return false;
    },
    autosQuePuedeComprar (persona){
        let listaAutos = this.listaDeVentas().filter((stock)  =>  this.puedeComprar(stock,persona)); // los filters solo reciben un true y false, si es true se agrega a la lista
        return  listaAutos
    },
}

/*let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }*/


//console.log(concesionaria.puedeComprar(concesionaria.autos[2],concesionaria.personas[0]));
console.log(concesionaria.autosQuePuedeComprar(concesionaria.personas[0]));

