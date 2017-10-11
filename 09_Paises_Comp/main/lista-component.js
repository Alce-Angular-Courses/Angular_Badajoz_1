class ListaController {

    constructor ($http) {
        this.$http = $http;
    }

    $onInit () {
        this.aPaises = []
        this.sUrlBase = "http://restcountries.eu/rest/v1/region/";         
        this.aContinentes = [
            {id : "africa", name : "Africa"},
            {id : "europe", name : "Europa"},
            {id: "americas", name: "America"},
            {id: "asia", name : "Asia"}
        ]
    }

    buscarPaises () {
        
        let that = this;
        const URL =  this.sUrlBase + this.selectContinent.id
		// solicita por AJAX los datos del continente seleccionado
		console.log(this);

		this.$http({method : 'GET', url: URL})
		//this.$http.get(URL)
		.then(
           // response => {	
           // this.aPaises = response.data;
           // }, 
            function (response) {	
                that.aPaises = response.data;
            }

    );
	} // Fin de la función buscarPaises 
}

angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});