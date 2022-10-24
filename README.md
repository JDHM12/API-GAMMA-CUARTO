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
Generado un Json con el siguiente formato y almacenado en una base de datos de tipo NoSQL, el codigo se realizo con MongoDB en el archivo *index.js* se encuentra la variable **dbURL** para almacenar la conexión.

`{'fechaEntrada':'##','durezaEntrada':'##','durezaSalida':'##','familiaRef':'##','zona':'##','elevado':'##','hueco':'##','fechaSalida':'##'}`

