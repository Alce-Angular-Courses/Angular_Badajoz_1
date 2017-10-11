class CabezaController {

    constructor () {}

    $onInit () {
        this.sTitulo = 'Paises del Mundo';
     };

    // $onChanges (changesObj) { };
    // $onDestroy () { };
}


angular.module('sharedModule')
.component('appCabeza', {
    template:`
    <header>
        <h1 ng-bind="$ctrl.sTitulo"></h1>
        <!--
        <h1>{{$ctrl.sTitulo}}</h1>
        -->
    </header>`,
    controller: CabezaController
});

