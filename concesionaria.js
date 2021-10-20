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
    autosNuevos(){
        let autosNoVendidos = this.autos.filter((stock)=>{
            return stock.km < 100;
        });
        return autosNoVendidos
    }
}


console.log(concesionaria.autosNuevos());