//CLASE 14 -NODE

/*
?--> Protocolo HTTP
  * modelo cliente servidor
    cliente -> REQUEST -> SERVIDOR -> RESPONSE -> PEDIDO

  *Procoto http - Hypertex Tranfer Protocol
    sirve para transferir informacion entre el front y el back en la www
    conexion entre el cliente y el servidor (REQUEST-RESPONSE)
    ! http vs https
      con S: secure -> es mas segura y protege con una capa de seguirdad adicional la informacion que se transmite

    * Estructura request y reponse 
      !request (PEDIDO)
        -metodos => get, post, put, delete
        -url => a donde se va a enviar la request
        -header => traen infomacion acerca del request
        -procotoco => http
        -body => depende del metodo que utilicemos
      
      !response (RESPONSE)
        -status code: un numero que nos da inf de como salio el proceso request-response
        -status message: una descripcion que nos da inf acerda de si la solicita http fue satisfactoria o no
        -headers: le da mas informacion al cliente acerca de la respuesta
        -body: opcional. contener data correspondien a la respuesta del servidor


?--> Metodos http
  -get: obetener informacion del servidor
  -post: envia datos al servidor
  -put: actualizar o reemplazar
  -delete: borrar

?--> status codes
  -1xx - infomativos -> solicito recibio y procesandose
  -2xx - estado satifactorio -> la solicitud ha sido exitosa (200 OK)
  -3xx - estado de redirección -> recurso pedio ha sido movido temporalmenta a una nueva URL (302 Found)
  -4xx - estado de error del CLIENTE -> el recurso solicitado no se encuentra en el servidor (404 Not Found)
  -5xx - estado de error del SERVIDOR -> la solicitud no se pudo realizar por un error inter del servidor (500 internal Server Error)

?--> Conexion entre front y back
  http -> front-back de una aplicacion -> comunicarse entre si -> para procesar solicitudes y enviar respuestas

?--> Servidores vs base de datos
  -> servidor: es el equipo, sistema o programa para acceder y manipular la informacin almacenada en la base de datos
  -> base de datos: es donde se almacena y organizas los datos

?--> Node
  *JS en el backend
    - instalar node -> https://nodejs.org/es/download
    - verificamos que se instalo -> node -v

  *npm (node package manager) -> GESTOR DE PAQUETES DE NODEJS
    - permite a los desarrolladores:
      => instalar
      => administrar
      => compartir
      MODULO DE CODIGOS Y BIBLIOTECAS DE TERCEROS en sus proyectos

  * iniciliazianr npm -> npm init
      - me crea un archivo package.json -> contiene informacion sobre el proyecto y sus dependencias

      -instalar dependencias
        => npm install nombreDeLaLibreria
        => npm i nombreDeLalibreria

?--> Git - Github
  *GIT
  sistema de control de versiones realizar un seguimiento de las versiona antiguas del codigo y trabajar en paralelo en diferentes ramas y fusipnar los cambios en una unica lines ppal
  !INSTALAR GIT
   -comandos git
   -> git init
   -> git add nombreDelArchivo / git add .
   -> git status
   -> git commit -m "mensaje"
*/


console.log("Hola por la terminal de VSC");
console.log("HOla agregue algo");
console.log("Hola agregue otra cosa a mi codigo");
console.log("Hola agregue una lista ordenada");