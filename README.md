## instalar EXPO GO en el dispositivo donde se vaya a probar, ver settings/Supported SDK
SDK 54

## creacion con tabs en managed workflow con la version expo compatible 54
```
pnpm create expo-app@latest app-brw --template tabs@sdk-54
```

## conectamos a EAS y obtenemos ID
```
eas init
eas build:configure
```

## Dependencias instaladas
```
pnpm expo install @react-navigation/bottom-tabs @react-navigation/elements expo-haptics expo-image expo-image-picker expo-symbols expo-system-ui expo-linear-gradient react-native-gesture-handler eslint-config-expo expo-secure-store
```
```
pnpm add eslint@^9.25.0
```

## fuentes
```
pnpm expo install @expo-google-fonts/inter @expo-google-fonts/jetbrains-mono @expo-google-fonts/jost @expo-google-fonts/plus-jakarta-sans
```
## eliminamos las carpetas bases
```
Remove-Item -Recurse -Force 'app'
Remove-Item -Recurse -Force components
Remove-Item -Recurse -Force constants
Remove-Item 'tsconfig.json'
```
## Copiamos la carpeta app y src
## Copiamos el archivo tsconfig.json

## instalar expo-share-intent
## en https://github.com/achorein/expo-share-intent/#versioning vemos que versión es compatible con nuestro SDK
SDK 54 -- 5.0+
## instalamos la versión
```
pnpm expo install expo-share-intent@5
```
## error app.json - expo-share-intent
## sustituye plugins por este:
```
    "plugins": [
      "expo-router",
      "expo-secure-store",
      [
        "expo-share-intent",
        {
          "iosActivationRules": {
            "NSExtensionActivationSupportsWebURLWithMaxCount": 1,
            "NSExtensionActivationSupportsText": true,
            "NSExtensionActivationSupportsImageWithMaxCount": 1
          },
          "androidIntentFilters": ["text/*", "image/*"]
        }
      ]      
    ],
```
## creamos el respositorio en github y obenemos la url
```
https://github.com/miguelbrown78/react-native-bw-0
```

## conectamos y creamos el 1º repositorio
```
git add .
git commit -m "init: proyecto base con hola mundo"
git branch -M main
git remote add origin https://github.com/miguelbrown78/react-native-bw-0.git
git push -u origin main
```