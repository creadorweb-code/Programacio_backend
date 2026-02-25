/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
   y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

   Un módulo nativo es parte del propio entorno de Node.js. Viene incluido
   cuando instalamos Node, por lo que no necesita descargarse ni instalarse
   aparte. En cambio, un módulo de NPM es un paquete externo creado por la
   comunidad (o terceros) y debe instalarse manualmente usando npm install.
   Los módulos de NPM se descargan desde el registro de NPM y se guardan
   en la carpeta node_modules del proyecto.

2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
   y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.

   'require' pertenece al sistema CommonJS y carga los módulos de forma
   dinámica y síncrona en tiempo de ejecución (cuando el código se ejecuta).
   En cambio, 'import' pertenece al sistema ES Modules y realiza la carga
   de manera estática, lo que significa que las dependencias se analizan
   antes de que el código se ejecute. Además, 'import' permite un mejor
   análisis del código, optimización y uso de características modernas
   como tree shaking.

3. Sobre el archivo 'package.json':
   a) ¿Por qué es vital compartir este archivo pero NO la carpeta
      'node_modules' al subir a un repositorio?

      Porque package.json contiene la lista de dependencias, versiones
      y configuración del proyecto. Con ese archivo, cualquier persona
      puede reconstruir el entorno ejecutando npm install. La carpeta
      node_modules no se comparte porque es muy pesada, puede contener
      miles de archivos y puede regenerarse automáticamente.

   b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo
      tiene el package.json?

      npm leerá el archivo package.json, descargará todas las
      dependencias listadas y creará automáticamente la carpeta
      node_modules con los paquetes necesarios para que el proyecto
      funcione correctamente.





      