
class PieController {

    $onInit () {
        this.sCurso='AngularJS';
    }
}

angular.module("sharedModule")
.component('appPie', {
    template:`
    <footer>
        <p>Curso de {{$ctrl.sCurso}}</p>    
    </footer>
    `,
    controller: PieController
});
