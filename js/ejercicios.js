
//esperar a que se cargue HTML para activar los listeners
window.onload = function() {

  //Ejercicio 1
  document.getElementById('boton1').addEventListener("click", ejercicio1);

  function ejercicio1() {
      console.clear()
      let nombre = ['J', 'E', 'L','I', 'Z', 'A', 'V', 'E', 'T', 'A'];
    
      for (i=0; i < nombre.length; i++) {
          console.log(nombre[i]);
      }

  };

  //Ejercicio 2
  document.getElementById('boton2').addEventListener("click", ejercicio2);

  function ejercicio2() {
    console.clear()
    let nombre = ['J', '3', 'L','I', 'Z', 'A', 'V', 'E', 'T', 'A'];
    let vocales = 'aeiouAEIOU'

    console.log('Partim del nom J3LIZAVETA')

    for (i=0; i < nombre.length; i++) {

      if ( isNaN(nombre[i]) ) {

        if (vocales.indexOf(nombre[i]) !== -1 ){
            console.log(`He trobat la VOCAL ${nombre[i]}`)
        }else if (vocales.indexOf(nombre[i] == -1)){
            console.log(`He trobat la CONSONANT ${nombre[i]}`)
        }

      } else {
        console.log(`Els noms de persones no contenen el número: ${nombre[i]}`)
      }
    
    }
  }

  //Ejercicio 3
  document.getElementById('boton3').addEventListener("click", ejercicio3);

  
  function ejercicio3() {
    let nombre = ['J', 'E', 'L','I', 'Z', 'A', 'V', 'E', 'T', 'A'];

    console.clear()
    
    let count = {};

    nombre.forEach(function(x) { 
      count[x] = (count[x] || 0)+1; 
    
    });
    
    console.log(count)
  
  }

  //Ejercicio 4
  document.getElementById('boton4').addEventListener("click", ejercicio4);

  function ejercicio4() {
    console.clear()
    let myName = ['J', 'E', 'L','I', 'Z', 'A', 'V', 'E', 'T', 'A'];
    let surname = ['M', 'I', 'H', 'H', 'E', 'D','K','O'];

    let fullName = myName.concat(' ', surname);

    console.log(fullName)

  }

  //Ejercicio 5 (Nivel 2)
  document.getElementById('boton5').addEventListener("click", ejercicio5);

  function ejercicio5() {
    console.clear()

    const str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

    function getEmails() {
      //buscar emails en el texto
        let regex = (/[ña-zA-Z0-9-_.]+@[ña-zA-Z0-9-_.]+/gi);
        var emailsArray = str.match(regex);
      
      //quitar emails repetidos
      emailsArray.splice(0, emailsArray.length, ...(new Set(emailsArray)));

      return(emailsArray);
    }

    //array con los emails del texto
    console.log(getEmails())
  }

}




