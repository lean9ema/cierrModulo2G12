const autos = require('./autos');


const concesionaria = {
    autos: autos,/*.forEach((autos) =>{
    console.log(autos);})*/
    buscarAuto(patente) {
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
           console.log(autos);  
        })
    },
    autosParaLaVenta(){

        let autosNoVendidos = this.autos.filter((stock)=>{
            return stock.vendido != true
        });
        return autosNoVendidos
    },
    autos0KM(){
        let autosOKm =  this.autosParaLaVenta.filter((stock)=>{
            return stock.km < 100;
        });
        return autosOKm
    },
    autosNuevos(patente){
        
        let autosOKm = this.autos0KM.filter((stock)=>{
            return stock.patente != patente;
        });
        return autosOKm
    }
}


console.log(concesionaria.autosNuevos('JJK116'));