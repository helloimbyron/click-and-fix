# 1. Descripción 📃

Este proyecto consiste en una aplicación web para reservar citas en el taller automotriz **Click & Fix**. 🙌

El usuario debe ingresar tanto sus datos personales, como los de su carro. Luego debe seleccionar al menos un servicio. Finalmente, se genera y almacena la orden de trabajo en la una base de datos. 🤝

Fue desarrollado durante mi estadía en [Coding Bootcamps ESPOL](http://www.bootcamps.espol.edu.ec/), en el 2023. 🐢

# 2. Tecnologías 💻

| #   | Tecnología        | Descripción                                   | URL                                                                                                       |
| --- | ----------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `1` | React y React DOM | Creación de UI y renderización de componentes | [Ver](https://react.dev/learn)                                                                            |
| `2` | DynamoDB          | Base de datos no relacional                   | [Ver](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html) |
| `3` | Temporal (beta)   | Manejador de fechas y tiempos                 | [Ver](https://tc39.es/proposal-temporal/docs/)                                                            |
| `4` | Vite              | Herramienta de compilación                    | [Ver](https://vitejs.dev/guide/)                                                                          |
| `5` | ESLint            | Linter para JavaScript                        | [Ver](https://eslint.org/docs/latest/)                                                                    |

# 3. Instalar dependencias 📦

Instalamos las dependencias necesarias para correr nuestra aplicación web.

```
npm install
```

# 4. Obtener credenciales de AWS 🔑

> **❗ Consideraciones: 👀**
>
> **a. Para este proyecto estamos utilizando Learner Lab. 🖖**
>
> **b. En cada nueva sesión del Learner Lab se generan nuevas credenciales de AWS. ¡Así verifique que aún sean vigentes! ✅**
>
> **c. No compartir las credenciales con nadie. 🤫**

1. Iniciar sesión en su cuenta de Learner Lab.
2. En la parte superior: dar clic al botón `Start Lab`.
3. Espere hasta que el servidor de AWS se active. El botón pasará de 🔴 a 🟢.
4. En la barra superior: dar clic en `AWS Details`.
5. Al inicio de la barra lateral derecha aparece `AWS CLI`: dar clic al botón `Show`.
6. Copiar las 3 llaves:

   1. `aws_access_key_id`
   2. `aws_secret_access_key`
   3. `aws_session_token`

7. Al final de la barra lateral derecha aparece una tabla: copiar la última celda que contiene la `Region`.
8. Pegar tanto las **_tres (3) llaves_** como la **_region_** en el archivo `dynamoConfig.js` en la ruta `/src/aws`.

   ```javascript
   /* Modo demo:
   Por defecto, el proyecto viene configurado con una región,
   para que disfrutes la aplicación web sin conexión a DynamoDB. */

   const client = new DynamoDBClient({
     region: "us-east-1",
     credentials: {
       accessKeyId: "",
       secretAccessKey: "",
       sessionToken: "",
     },
   });
   ```

# 5. DynamoDB 🧮

La aplicación web utiliza la base de datos no relacional DynamoDB de AWS.

Para ello, vamos a configurar las dos (2) tablas que se requieren: `invoices` y `services`.

## 5.1. Tabla `invoices` 🧾

> **💡 La aplicación web necesita esta tabla guardar las órdenes de trabajo. Así que no se ingresa nada manualmente.**

1. Ir a la página principal de `DynamoDB`.
2. En la segunda columna, dentro del bloque `Create resources`: dar clic al botón naranja `Create table`.
3. En el _input_ `Table name`: escribir el nombre de la tabla, es decir, `invoices`.
4. En el _input_ `Partition key`: escribir `timeRegister`.
5. En el _input_ `Sort key - optional`: escribir `timeDelivery`.
6. Navegar hasta el final de la página y dar clic al botón naranja `Create table`.
7. Finalmente, esperar que el `Status` cambie de `Creating` a `Active`.

## 5.2. Tabla `services` 🔧

> **💡 Esta tabla contendrá todos los servicios disponibles del taller automotriz `Click & Fix`.**

### 5.2.1. Crear la tabla

1.  Cuando el `Status` de la tabla `invoices` sea `active`: dar clic al botón `Create table` en la parte superior derecha.
2.  En el _input_ `Table name`: escribir el nombre de la tabla, es decir, `services`.
3.  En el _input_ `Partition key`: escribir `id`.
4.  En el _input_ `Sort key - optional`: escribir `name`.
5.  Navegar hasta el final de la página y dar clic al botón naranja `Create table`.
6.  Finalmente, esperar que el `Status` cambie de `Creating` a `Active`.

### 5.2.2. Ingresar un servicio: opción `Form`

1.  En la columna `Name`: dar clic al enlace azul `services`.
2.  Una vez redirigido, en la parte superior derecha, dar clic al botón naranja `Explore table items`.
3.  En el bloque `Items returned`: dar clic al botón `Create item`.
4.  En la esquina superior derecha: dar clic en `Add new attribute`.
5.  En el menú desplegado dar clic en `Number`.
6.  Cambiar el valor del _input_: `NewValue` por `duration`.
7.  Repetir el paso `4` y `5` para obtener un segundo atributo `Number`.
8.  Cambiar el valor del segundo _input_: `NewValue` por `price`.
9.  Ingresar la información de los servicios que ofrece el taller:

    1. `id`: identificador único para cada servicio.
    2. `name`: nombre de cada servicio.
    3. `duration`: duración del servicio.
    4. `price`: precio del servicio.

10. Una vez ingresado la información de un servicio: dar clic al botón naranja `Create item`.
11. Repetir **desde el paso tres (3) hasta el diez (10)** para ingresar un nuevo servicio.

### 5.2.3. Ingresar un servicio: opción `JSON view`

Sin embargo, la forma más rápida de ingresar un servicio es con la opción `JSON view`:

1. En el bloque `Items returned`: dar clic al botón `Create item`.
2. En la parte superior derecha vemos que la opción `Form` está marcada en azul.
3. Dar clic en la opción `JSON view`.
4. Copiar y pegar el siguiente código:

   ```json
   {
     "id": {
       "S": ""
     },
     "name": {
       "S": ""
     },
     "duration": {
       "N": ""
     },
     "price": {
       "N": ""
     }
   }
   ```

5. Acorde a cada atributo: rellenar la información del servicio entre las comillas dobles (`""`). Por ejemplo: `S` para _strings_, `N` para números.
6. Una vez ingresado la información: dar clic al botón naranja `Create item`.

### 5.3. Modo demo

Si bien la aplicación web utiliza DynamoDB, podemos prescindir de él. Esto conlleva dos (2) limitaciones:

1. No se cargarán los servicios en la base de datos. Para ello, la aplicación usará el archivo `servicesList.json` en la ruta `src/mocks`. Este contiene algunos servicios predefinidos.
2. No se podrán guardar las órdenes de compra en DynamoDB.

# 6. Correr aplicación 🔥

> **❗ Consideraciones: 👀**
>
> **a. Verificar que las credenciales de AWS aún estén vigentes. 🖖**
>
> **b. Es vital mantener el servidor de AWS activado para utilizar las funciones de DynamoDB. 💪**

1. Abrir una línea de comandos en la raíz de nuestro proyecto.
2. Correr la aplicación web:

   ```
   npm run dev
   ```

3. Copiar la ruta que nos generó Vite, al lado de `Local`. Por lo general la ruta es: <http://localhost:5173/>

4. Abrir nuestro navegador preferido.
5. En la barra de navegación: pegar la ruta.
6. ¡Disfrutar! 🦄

# 7. Despliegue con S3 😎

De manera sencilla, podemos desplegar nuestra aplicación web en un _bucket_ de Amazon S3.

## 7.1. Compilar el proyecto

1. Abrir una línea de comandos en la raíz de nuestro proyecto.
2. Compilar la aplicación web:

   ```
   npm run build
   ```

3. En la raíz del proyecto se generará una carpeta llamada `dist`.

## 7.2. Crear _bucket_ de S3

1. Ir a la página principal de `S3`.
2. En la segunda columna, dentro del bloque `Create a bucket`: dar clic al botón naranja `Create bucket`.
3. En el _input_ `Bucket name`: escribir el nombre del _bucket_. Por ejemplo: `click-and-fix`.
4. En el bloque `Object Ownership`: seleccionar la opción `ACLs enabled`.
5. En el menú desplegado: dar clic en `Object writer`.
6. En el bloque `Block Public Access settings for this bucket`: desmarcar la opción `Block all public access`.
7. En el mensaje de peligro ⚠️: marcar `I acknowledge that the current settings might result in this bucket and the objects within becoming public`.
8. Finalmente, bajar hasta el final de la página y dar clic al botón naranja `Create bucket`.

## 7.3. Subir directorio `dist`

Una vez creado el _bucket_ en el **paso 7.2**, será redirigido a la página `Amazon S3 > Buckets`.

1. En la columna `Name`: dar clic al enlace azul que tiene el nombre del _bucket_. Por ejemplo: `click-and-fix`.
2. Será redirigido a la pestaña `Objects`.
3. Abra la carpeta `dist`.
4. Seleccione su contenido: la carpeta `assets`, el `car-white.svg` y el `index.html`.
5. Arrastre los 3 archivos hacia el botón `Upload` y suelte.
6. En el bloque `Files and folders`: verifique que solo se subirán **cinco (5) archivos**.
7. Dar clic al botón naranja `Upload`.
8. Espere que el `Status` de los **cinco (5) archivos** cambie de `Pending` a `Succeeded`
9. Finalmente, dar clic al botón naranja `Close`.

## 7.4. Configurar políticas de ACL

Será redirigido a la página `Amazon S3 > Buckets > [El nombre de su bucket]`, concretamente a la pestaña `Objects`.

1. Dar clic en la pestaña `Permissions`.
2. Ir al bloque `Bucket policy`: dar clic al botón `Edit`.
3. En el campo de código de `Policy` agregar las siguientes políticas y reemplazar `<El-nombre-de-su-bucket>` por el nombre de su _bucket_:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": "*",
         "Action": ["s3:GetObject", "s3:PutObject"],
         "Resource": [
           "arn:aws:s3:::<El-nombre-de-su-bucket>",
           "arn:aws:s3:::<El-nombre-de-su-bucket>/*"
         ]
       }
     ]
   }
   ```

4. Finalmente, bajar hasta el final de la página y dar clic al botón naranja `Save changes`.

## 7.5. Configurar CORS

Será redirigido a la página `Amazon S3 > Buckets > [El nombre de su bucket]`, concretamente a la pestaña `Permissions`.

1. Bajar hasta el final de la página.
2. Dar clic al botón `Edit` en el bloque `Cross-origin resource sharing (CORS)`.
3. En el campo de código agregar las siguientes configuraciones:

   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["PUT", "POST", "GET"],
       "AllowedOrigins": ["*"],
       "ExposeHeaders": ["ETag"]
     }
   ]
   ```

## 7.6. Habilitar _static website hosting_

Será redirigido a la página `Amazon S3 > Buckets > [El nombre de su bucket]`, concretamente a la pestaña `Permissions`.

1. Dar clic en la pestaña `Properties`.
2. Navegar hasta el último bloque llamado `Static website hosting`.
3. Dar clic al botón `Edit`.
4. Seleccionar la opción `Enable`.
5. En el _input_ `Index document`: escribir `index.html`.
6. Finalmente, dar clic al botón naranja `Save changes`.

## 7.7. Copiar URL

Será redirigido a la página `Amazon S3 > Buckets > [El nombre de su bucket]`, concretamente a la pestaña `Properties`.

1. Navegar hasta el último bloque llamado `Static website hosting`.
2. Dar clic al botón de copiar.
3. Aparecerá un _popover_ con el siguiente texto en verde: `Bucket website endpoint copied`.
4. La URL será similar a esta: <http://click-and-fix.s3-website-us-east-1.amazonaws.com>
