angular.module("appModule")
.directive('appCabeza', appCabeza)

function appCabeza () {
    return {
        template :` 
            <header>
                <h1>Ejemplo de {{sTitulo}}</h1>
            </header>
            `,
        restrict :'E',
        replace : false,
        //controllerAs : "$ctrl",
        scope : {
            // localName: '=propiedad'
            sTitulo : '@titulo'
        },
        link : function(scope, elem, attrs) {
            console.log(scope);
            console.log(elem);
            //elem[0].innerHTML += "<p>Esto lo añade la directiva</p>"
            elem.append("<p>Esto lo añade la directiva</p>")

        },
        controller : ''
    };
}


