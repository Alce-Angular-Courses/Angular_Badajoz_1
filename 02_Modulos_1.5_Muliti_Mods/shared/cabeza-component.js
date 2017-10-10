class CabezaController {

    constructor () {}

    $onInit () {
        this.sTitulo = 'Hola Mundo';
     };

    // $onChanges (changesObj) { };
    // $onDestroy () { };
}


angular.module('sharedModule')
.component('appCabeza', {
    template:`
    <header>
        <h1>{{$ctrl.sTitulo}}</h1>
    </header>`,
    controller: CabezaController
});

