```markdown
#
Este es un proyecto de React Native configurado para usar Firebase y Expo.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (recomendado LTS)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Pasos para Configurar y Ejecutar el Proyecto

### 1. Clonar el Repositorio

Para clonar este repositorio, abre tu terminal y ejecuta:

```bash
git clone https://github.com/snnare/App-sencilla.git
cd App-sencilla
```

### 2. Instalar Dependencias
Una vez dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

```bash
npm install
```

### 3. Ejecutar la Aplicación

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npx expo start -c
```

Este comando abrirá el servidor de desarrollo de Expo y te permitirá ver la aplicación en un emulador o en un dispositivo físico utilizando la aplicación de Expo Go.

### 5. Construir el APK

Para construir un archivo APK, asegúrate de tener configurado EAS. Sigue estos pasos:

1. Instala Expo CLI y EAS CLI si no lo has hecho ya:

    ```bash
    npm install -g expo-cli eas-cli
    ```

2. Configura EAS para tu proyecto:

    ```bash
    eas build:configure
    ```

3. Logearse:

    ```bash
    eas login
    ```

4. Construye el APK:

    ```bash
    eas build -p android --profile preview
    ```

Sigue las instrucciones en pantalla para completar el proceso de construcción. Una vez que la construcción esté completa, recibirás un enlace para descargar el APK.

