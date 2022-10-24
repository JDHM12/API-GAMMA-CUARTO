# API GAMMA CUARTO ACONDICIONAMIENTO


## Objetivo
Se busco generar una API con tecnologia backend **Node.Js** para el manejo de invetario del cuarto de Gamma,
el sistema cuneta con un modelo tipo *Machine Learning- Regresion lineal multiple* que realiza el calculo de permnencia del
rollo en el cuarto esto apartir de las siguientes Variables:
  - Fecha Entrada
  - Dureza Entrada
  - Dureza Salida
  - Familia Referencia (Tamaño)
  - Hueco (Contar con perforación)
  - Zona Cuarto
  - Altura 

Generado un Json con el siguiente formato y almacenado en una base de datos de tipo NoSQL.El codigo se realizo con MongoDB en el archivo *index.js* se encuentra la variable **dbURL** para almacenar la conexión.

```{'fechaEntrada':'##','durezaEntrada':'##','durezaSalida':'##','familiaRef':'##','zona':'##','elevado':'##','hueco':'##','fechaSalida':'##'}```

***

## Rutas API

la API cuenta con un CRUD simple para obtener y manipular los datos.

- [X] Create : /inventario --> esta toma el JSON del body de una peticion generada. (POST)

- [X] Read: /inventario --> retorna todos los rollos almacenado en la base de datos retornandolos el body. (Get)

- [ ] Update: No cuenta con update ya que no es necesario

- [X] Delete: /inventario?id=# --> elimina el rollo partiendo del parametro id almacenado en la base de datos el cual es autogenerado por Mongo.


Para poner el servidor en funcionamiento con *Node.Js* ejecute el siguiente comando ubicado en la carpeta del proyecto

`Npm start`
