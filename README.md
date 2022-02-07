# Documentación del proyecto - e-commerce Tienda Taca Taca

![Tienda-Taca-Taca-Persona-1_-Microsoft_-Edge-2022-02-07-18-53-43](https://user-images.githubusercontent.com/87787593/152888273-ccf88664-ab53-4094-80bd-0ed65ce16b2b.gif)


## Descripción general

Esta aplicación fue desarrollada en el marco del curso de ReactJS de CoderHouse y se trata de una plataforma e-commerce que muestra información de productos que el usuario puede comprar (en sentido figurado), realizando la navegación por categorías (en este caso dos: ropa y juguetes) y visualizando el detalle de cada producto.
Los artículos están alamcenados en un base de datos Firebase.

## Tecnologías empleadas

El sitio fue creado con React JS y para su implementación se utilizaron los siguientes paquetes:

- [Create-React-App](https://create-react-app.dev/docs/getting-started)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Firebase](https://firebase.google.com/)

## Probar la aplicación

En caso de querer replicar el proyecto seguir estos pasos desde git bash:

1. Clonar el repositorio

   git clone https://ggithub.com/arturitok/tiendakeck

2. Ubicarse en la carpeta correspondiente

   cd tiendakeck

3. Ejecutar el instalador (incluir todas las dependencias)

   npm install

4. Una realizada las instalación con todas las dependencias, ejecutar

   npm start

5. Se abrirá el browser predeterminado y se ejecutará la aplicación. Accesible desde:

   localhost:3000

   Si el puerto está ocupado el script sugerirá otro port (por ejemplo localhost:3001)

6. Detener el servicio:
   En la consola presionar Ctrl+C

## Funcionalidades:

Para cumplir con las diferentes funcionalidades requeridas, se trató de mantener un diseño lo más sencillo posible. Al ingresar se muestran directamente los productos ofrecidos, cada cual posee una foto, botones para ver los detalles y eventualmente agregar al carrito.
La barra de navegación exhibe un link con la marca de la tienda que dirige al home y un link para cada una de las dos categorías disponibles en la tienda.
En caso de tener productos en el carrito se muestra el icono en la parte superior derecha aosciado al widget que permite accerder al carrito.

Al ingresar al detalle de un producto observaremos la imagen asociada, la descripción completa y 2 botones de selección que permiten aumentar o disminuir la cantidad, los límites de la cantidad están dados por el valor inicial (1) y la cantidad en stock del artículo. Finalmente se podrá agregar el producto al carrito, visualizando el cambio de estado en el widget del carrito

Si hay items en el carrito, el icono que se encuentra en la parte superior derecha reflejará la cantidad de artículos cargados. En caso de borrar o eliminar, el contador numérico se actualizará o dado el caso desaparecerá.
Haciendo click en el icono de carrito o en el botón "terminar compra" desde el detalle del artículo se accederá al contenido del carrito, donde se visualizarán los subtotales y totales, se podrá eliminar ítems, vaciar el carrito o terminar la compra, en cuyo caso será necesario completar los datos del formulario.

El formulario contendrá los siguientes campos:

- Nombre.
- Teléfono.
- Email.
- Confirmación de email.

El botón de terminar la compra solamente realizará una acción en caso de haberse completado todos los campos.

Al finalizar la compra obtendremos la confirmación del proceso y un ID de compra asociado.
El carrito quedará vacio y podremos acceder al listado de productos desde el botón correspondiente.

## Estructura de la aplicación:

La implementación de la estructura intenta aislar las responsabilidades de cada componente, siempre que sea posible. En forma esquemática la arquitectura se visualiza en el siguiente diagrama.

![tiendaDiagram](https://user-images.githubusercontent.com/87787593/152888525-8cd133d1-a575-432d-a6ed-2d19088bdded.png)


## Información del autor:
Mi nombre es Arturo y estoy haciendo las primeras armas en Front End Developing.

Cualquier aporte o comentario será muy bienvendido.

Estoy en Gihub y Linkedin. 

