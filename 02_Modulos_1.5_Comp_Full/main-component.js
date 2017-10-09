class MainController {
    $onInit() {
     this.sCurso='AngularJS'; 
    }
}
angular.module("appModule")
.component('appMain', {
    templateUrl: 'main-partial.html',
    controller: MainController,
    controllerAs: 'vm'
});