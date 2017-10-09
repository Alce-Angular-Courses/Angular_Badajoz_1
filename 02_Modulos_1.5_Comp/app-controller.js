class AppController {
    $onInit() {
     this.sCurso='AngularJS'; 
    }
}
angular.module("appModule")
.controller("AppController", AppController);