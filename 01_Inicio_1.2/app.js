angular.module("appModule", [])
.controller("AppController", AppController)

AppController.$inject = ['$scope'];

function AppController ($scope) {

    // var vm = this;

    this.sName='Pepe';
    this.sCurso='AngularJS';
    console.log(this);
    console.log($scope);
    
    btnBorrar = function () {
            this.sName=''
        }
}




        

