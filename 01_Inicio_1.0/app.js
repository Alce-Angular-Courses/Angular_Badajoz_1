angular.module("appModule", [])
.controller("AppController", ['$scope' ,function ($scope) {
    $scope.sName='Pepe';
    $scope.sCurso='AngularJS';

    $scope.btnBorrar = function () {
        $scope.sName=''
    }
}])
