class ListaController {
    $onInit() {   
        //this.sNuevaIdea='';
        this.aIdeas = [];
        console.log(this);
    }  

    btnAdd () {
        this.aIdeas.push(this.sNuevaIdea);
        this.sNuevaIdea = "";
        console.log(this);
    }
}

angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});