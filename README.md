# Smart Rx

Smart Rx es una aplicación web desarrollada en Angular v19 diseñada para facilitar la gestión de recetas médicas. El sistema permite a los médicos registrar sus credenciales (cédulas profesionales y claves de trabajo) y, posteriormente, crear recetas que incluyen medicamentos y sus respectivas cantidades. La aplicación utiliza Angular Material para ofrecer una interfaz moderna y responsiva, y está estructurada en módulos con lazy loading para optimizar el rendimiento.

## Características

- **Registro de credenciales médicas:** Permite a los médicos dar de alta sus cédulas y claves de trabajo.
- **Gestión de recetas médicas:** Los médicos pueden crear recetas, seleccionar medicamentos y especificar la cantidad a recetar.
- **Lazy loading:** Las secciones se cargan de forma perezosa para mejorar la velocidad de carga.
- **Interfaz responsiva:** Uso de Angular Material y CDK para ofrecer una experiencia óptima en distintos dispositivos.
- **Diálogos modales:** Ventanas modales para ingresar información adicional (prescripción y nómina) sin recargar la página.

## Tecnologías Utilizadas

- **Angular v19**
- **Angular Material**
- **Angular CDK**
- **RxJS**
- **TypeScript**
- **SCSS**

1.- npm install

2.- Para instalar manualmente las dependencias utilizadas, puedes ejecutar:
  npm install @angular/core@^19.1.0 @angular/animations@^19.1.0 @angular/common@^19.1.0 @angular/compiler@^19.1.0 @angular/forms@^19.1.0 @angular/platform-browser@^19.1.0 @angular/platform-browser-dynamic@^19.1.0 @angular/router@^19.1.0 rxjs@~7.8.0 tslib@^2.3.0 zone.js@~0.15.0 @angular/cdk@^19.1.4 @angular/material@^19.1.4

3.- Para instalar dependencias de desarrollo: npm install --save-dev @angular-devkit/build-angular@^19.1.7 @angular/cli@^19.1.7 @angular/compiler-cli@^19.1.0 @types/jasmine@~5.1.0 jasmine-core@~5.5.0 karma@~6.4.0 karma-chrome-launcher@~3.2.0 karma-coverage@~2.2.0 karma-jasmine@~5.1.0 karma-jasmine-html-reporter@~2.1.0 typescript@~5.7.2

