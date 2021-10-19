const autos = require('./autos');


const concesionaria = {
    autos: autos,/*.forEach((autos) =>{
    console.log(autos);})*/
    bucarAuto(patente) {
        let stock = this.autos
        let autoFiltrado = stock.forEach(function(auto){
            let filtro;
            auto.patente == patente ? filtro = auto : null;
            console.log(filtro)
        })
        return autoFiltrado
 

        //return autoFiltrado[0].patente == patente ? autoFiltrado[0] : null;
        
    },
    venderAuto(patente){
        autoFiltrado = this.bucarAuto(patente);
        


    }
}


console.log(concesionaria.bucarAuto('JJK116'));