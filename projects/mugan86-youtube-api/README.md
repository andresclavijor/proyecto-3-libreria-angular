# Youtube API library

En este librería vamos a obtener la información haciendo uso de la API de Youtube obteniendo la información y mostrándola en estos casos:

* Información del canal de un usuario seleccionado
* Últimas playlist añadidas por un usuario
* Videos que componen una playlist seleccionada

## Instrucciones de instalación

Para poder hacer uso de esta librería, necesitamos instalar la librería con el siguiente comando
```
npm install mugan86-youtube-api
```

## Instrucciones de uso

Para hacer uso de esta librería, una vez que lo tenemos instalado, simplemente tenemos que importar el módulo en nuestra aplicación de Angular de la siguiente manera teniendo en cuenta que tenemos que meter por parámetro la API Key para poder hacer uso de la API de Youtube quedando de la siguiente manera:
```
import { Mugan86YoutubeApiModule } from 'mugan86-youtube-api';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    Mugan86YoutubeApiModule.forRoot({
      apiKey: 'API KEY Value
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Una vez que ya tenemos añadido el módulo en nuestro proyecto de Angular, podemos usar las opciones que tiene disponibles como mostrar la información del canal de un usuario, mostrar la lista de los últimos playlist añadidos por un usuario y también podemos visualizar la lista de todos los videos de un playlist seleccionado.

### Mostrar información del canal de usuario
```
<mugan86-yt-api-channel [channelId]="'UCTh7-deUJBNv2tHRiMGcXxg'"></mugan86-yt-api-channel>
```
### Últimas listas de reproducción añadidas por el usuario
```
<mugan86-yt-api-user-last-playlist [channelId]="'UCTh7-deUJBNv2tHRiMGcXxg'"></mugan86-yt-api-user-last-playlist>
```
### Videos de una lista de reproducción (Playlist)
```
<mugan86-yt-api-playlist-items [playlistId]="'UUTh7-deUJBNv2tHRiMGcXxg'"></mugan86-yt-api-playlist-items>
```