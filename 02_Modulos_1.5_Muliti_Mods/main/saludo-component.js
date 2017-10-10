class SaludoController {
    $onInit() {   
        this.sName='Pepe';
        console.log(this);
    }  

    btnBorrar () {
        this.sName=''
    }
}

angular.module("appModule")
.component('appSaludo', {
    templateUrl: './main/saludo-partial.html',
    controller: SaludoController
});