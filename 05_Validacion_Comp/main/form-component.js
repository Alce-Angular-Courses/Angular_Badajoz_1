class FormController {
    $onInit () {

        this.print = false;	//true si se selecciona imprimei	
        this.isClaro = ("oscuro"); //true si se selecciona claro       
        this.aDepartamentos=[
          {idDepartamento:2,
            nombre:"Marketing"},
          {idDepartamento:3,
            nombre:"Ventas"},
          {idDepartamento:1,
            nombre:"Sistemas"},
          {idDepartamento:7,
            nombre:"Gestión"},  
          {idDepartamento:5,
            nombre:"Materiales"}
        ];        
        this.oDepartamentoSeleccionado=null; 
        this.isSubmit = false;
      }
      
      avisarPrint () {
          console.log("Modificada la opción de imprimir con valor :");
          console.log(this);		
      }

      enviarFormulario() {
        this.isSubmit = true;
      }
}

angular.module("appModule")
.component('appForm', {
    templateUrl: './main/form-partial.html',
    controller: FormController
});