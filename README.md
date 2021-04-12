# Consumo de APIs WEB (plataformas en la nube)
Primer trabajo, aplicaciones distribuidas

<h2>OBJETIVOS</h2>
<ul>
<li>Conocer las arquitecturas y patrones arquitectónicos web para el diseño de aplicaciones web.</li>
<li>Interactuar con servicios web de plataformas en la nube.</li>
</ul>
<h2>ACTIVIDADES POR DESARROLLAR</h2>
<h3>1.	Identificar gráficamente la arquitectura web de la aplicación a desarrollar.</h3>

![image](https://user-images.githubusercontent.com/56609114/114432477-5a6dcb80-9b86-11eb-995d-6484413b43cd.png)
<h3>2.	Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).</h3>
<ul><li>En este punto trabajaremos con una API gratuita obtenida en API List Fun, la cual trata sobre MARVEL.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114432976-e41d9900-9b86-11eb-97cf-67ed47fd3dce.png)


<ul><li>Una vez que ya estemos dentro de Marvel, tenemos que dirigirnos hacia API Documentación, para poder crearnos las llaves necesaria y comenzar a desarrollar nuestro trabajo.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114433114-0f07ed00-9b87-11eb-8175-b1a469cc69dd.png)

<ul><li>Una vez que hayamos ingresado a API Documentación, tendremos unos avisos importantes, uno de los cuales nos sugiere mediante un link que creemos nuestra propia llave.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114433219-2fd04280-9b87-11eb-8b35-8c2f0b3c1667.png)

<ul><li>También tenemos un pequeño texto que nos indica cual es la autenticación para aplicaciones del lado del servidor.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114433329-4e363e00-9b87-11eb-97da-c616cc7caf9a.png)

<ul><li>Cuando ingresemos al link de obtener una clave API, se nos abre otra ventana en donde tenemos que registrar nuestros datos y verificarlo por medio del correo electrónico.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114433426-6f972a00-9b87-11eb-94d7-bb9cf41e669a.png)

<ul><li>Una vez registrado y verificado por medio del correo electrónico, ya tendremos acceso a nuestras llaves privada, y publica.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114433659-b2590200-9b87-11eb-9740-d75b1c2f306d.png)

![image](https://user-images.githubusercontent.com/56609114/114433711-bd139700-9b87-11eb-9301-f6147be90142.png)

<h3>3.	Crear un repositorio en GitHub con el nombre “Practica01 – Consumo de APIs en la nube”</h3>

![image](https://user-images.githubusercontent.com/56609114/114433981-15e32f80-9b88-11eb-9803-b3875ca70c0e.png)

<h3>4. Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información y visualizar toda la información disponible a través de la API.
</h3>

<ul><li>Creamos una aplicación llamada consumo de APIs, en donde creamos una carpeta css en donde tendremos todos nuestros estilos, una carpeta js en donde estará todo nuestro código de llamado de APIs, y un index.html, en donde nos reflejara las búsquedas.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114434104-3d39fc80-9b88-11eb-9c09-9a3c143efba7.png)

<ul><liDentro de la carpeta css, tenemos dos archivos un archivo llamado ed-grid-min.css, el cual realizara la función automática de organizar bordes márgenes de todo el documento, este archivo nos descargamos de una base de datos de GRID.</li>
<li>La otra hoja de estilo css, esta nuestros diseños que realizamos a lo largo del documento.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114434249-69ee1400-9b88-11eb-9bdb-09007d166300.png)

![image](https://user-images.githubusercontent.com/56609114/114434272-6f4b5e80-9b88-11eb-8a5f-e16ab0c9f3d8.png)

![image](https://user-images.githubusercontent.com/56609114/114434453-a4f04780-9b88-11eb-8574-1bd2d0809418.png)

<ul><li>Dentro de la carpeta js, tenemos nuestras líneas de programación en donde el archivo md5.js, es un algoritmo que se utiliza como una función de codificación o huella digital de un archivo. De esta forma, a la hora de descargar un determinado archivo como puede ser un instalador, el código generado por el algoritmo, también llamado hash, de esta manera codificara nuestras llaves que utilizaremos, el siguiente archivo lo pueden descargar directamente de la web.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114434567-c81af700-9b88-11eb-935e-7125ea125f50.png)

![image](https://user-images.githubusercontent.com/56609114/114434611-d36e2280-9b88-11eb-9639-275188094058.png)

![image](https://user-images.githubusercontent.com/56609114/114434680-e5e85c00-9b88-11eb-96f8-d8071ed0fbed.png)

![image](https://user-images.githubusercontent.com/56609114/114434736-f4367800-9b88-11eb-8515-0a7cfbfb99be.png)

![image](https://user-images.githubusercontent.com/56609114/114434766-fdbfe000-9b88-11eb-815f-58c8344d1c3d.png)

![image](https://user-images.githubusercontent.com/56609114/114434797-07494800-9b89-11eb-8870-a550b309ca31.png)

<ul><li>El otro archivo llamado script.js contiene toda nuestra programación destinada al consumo de APIs.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114434932-3069d880-9b89-11eb-8290-abc661b2e1b6.png)

![image](https://user-images.githubusercontent.com/56609114/114434987-4081b800-9b89-11eb-9ad1-680d5459331b.png)

![image](https://user-images.githubusercontent.com/56609114/114435012-49728980-9b89-11eb-92bd-fc7efde33d8b.png)

![image](https://user-images.githubusercontent.com/56609114/114435030-51322e00-9b89-11eb-94a1-3c9aa2954a0e.png)

<ul><li>Y por último creamos nuestro index.html, con ayuda de un nav de bootstrap que nos ayuda con una plantilla para la búsqueda.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114435093-65762b00-9b89-11eb-9100-8589894c44bd.png)

![image](https://user-images.githubusercontent.com/56609114/114435127-6dce6600-9b89-11eb-98f9-63c65b5713ef.png)

![image](https://user-images.githubusercontent.com/56609114/114435142-73c44700-9b89-11eb-82dc-e12b4883cd56.png)

<h3>5.	Realizar varios commits en la herramienta GitHub que demuestren el desarrollo de la aplicación.
</h3>

![image](https://user-images.githubusercontent.com/56609114/114435374-b2f29800-9b89-11eb-90e5-467c7c27ca8e.png)

<h3>6. Implementar el README del repositorio del proyecto con la misma información del informe de la práctica
</h3>

![image](https://user-images.githubusercontent.com/56609114/114435608-f77e3380-9b89-11eb-9e3c-b1fd793bf127.png)

<h3>7. Subir al AVAC el informe del proyecto en formato *.pdf. El informe debe contar con conclusiones apropiadas
y la firma de cada estudiante</h3>

<h2>RESULTADO(S) OBTENIDO(S):</h2>

<ul><li>Identifica las diferentes arquitecturas Web para el desarrollo de aplicaciones.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114435827-3dd39280-9b8a-11eb-96be-3521bd869307.png)

![image](https://user-images.githubusercontent.com/56609114/114435836-4035ec80-9b8a-11eb-9e6b-a66a7847bb88.png)

<h2>CONCLUSIONES:</h2>

<ul><li>Los estudiantes podrán identificar arquitecturas web utilizando servicios en la nube. Así como también, podrán consumir APIs y manipular objetos JSON.</li></ul>

<ul><li>Hacer uso de APIs, ayuda notablemente al uso de información relevante con tan solo una llave pública y privada podemos hacer uso de la documentación.</li></ul>


<h2>RECOMENDACIONES:</h2>

<ul>
<li>Es recomendable cifrar las llaves y crearlos en un solo archivo para únicamente cuando necesitemos hacer uso de las APIs, solo llamemos al método de esta manera no comprometemos nuestros datos privados.</li>
<li>Md5 es un buen algoritmo que podemos usar para proteger nuestras llaves ya sean públicas o privadas.</li>
</ul>

<ul><li>Docente: Ing. Gabriel León Paredes, PhD.</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114435995-73787b80-9b8a-11eb-8c08-77c27507f1dd.png)

<ul><li>Estudiante: Juan Fernando Cordova Arevalo</li></ul>

![image](https://user-images.githubusercontent.com/56609114/114436345-d4a04f00-9b8a-11eb-92d1-0c431f2fb892.png)
















