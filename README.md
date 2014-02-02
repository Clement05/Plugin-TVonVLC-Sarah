# [S.A.R.A.H.](http://encausse.net/s-a-r-a-h)

This plugin is an add-on for the framework [S.A.R.A.H.](http://encausse.net/s-a-r-a-h), an Home Automation project built 
on top of:
* C# (Kinect) client for Voice, Gesture, Face, QRCode recognition. 
* NodeJS (ExpressJS) server for Internet of Things communication

## License

```
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2012 S.A.R.A.H. <sarah.project@encausse.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
```

```
 This program is free software. It comes without any warranty, to
 the extent permitted by applicable law. You can redistribute it
 and/or modify it under the terms of the Do What The Fuck You Want
 To Public License, Version 2, as published by S.A.R.A.H. See
 http://www.wtfpl.net/ for more details.
```


## Description

1. Télécharger et décompresser l'archive dans le répertoire plugins de S.A.R.A.H.
2. Rendez-vous sur la page de configuration de S.A.R.A.H. (http://127.0.0.1:8080/home)
3. Cliquer sur l'icône de configuration du plugin-in (icone VC)
4. Configuer le chemin de VLC (C:/Program Files (x86)/VideoLAN/VLC/)
5. Indiquer le chemin du client VLC (ex: C:\sarah\plugins\TVonVLC)
6. Indiquer l'adresse du serveur HTTP de VLC (ex: 127.0.0.1) | ce paramètre de config est obselete
7. Indiquer le port d'écoute de VLC (ex: 8001) /!\ Il est impératif de changer ce port, car par défaut VLC utilsie le même port que S.A.R.A.H. ce qui entraîne un conflit
8. Indiquer le lien de la liste de lecture TV (ex: http://www.m3u.fr/orangetv.m3u) Par défaut le plugin est développé et marche pour Orange. Il et non testé pur les autres fournisseurs d'accès
9. Vol est à laisser vide. Cette propriété est utilisée pour sauvegarder le niveau du volume

## Liste des commances

SARAH +
            Lance VLC
            lance la télé sur VLC
            VLC passe en plein écran
	VLC sort du plein écran
	VLC lecture
	VLC pause
	VLC stop
	VLC suivant
	VLC précédent
	VLC baisser le volume
	VLC monter le volume
	VLC volume au minimum
	VLC volume au maximum
	VLC couper le volume
	VLC remettre le volume
	VLC volume intermédiare
            VLC zappe sur + <Chaine TV>

## Liens utiles

http://blog.manuelciosici.com/2009/02/05/tutorial-how-to-set-up-remote-http-control-interface-for-vlc-player/
http://www.autohotkey.com/board/topic/61757-vlc-http-command-list-and-quick-demo/
http://jermolene.wordpress.com/2009/07/08/hacking-vlc-media-player/
http://leshirondellesdunet.com/pages/vlc.php

https://github.com/ampache/ampache/blob/master/modules/vlc/vlcplayer.class.php
https://github.com/videolan/vlc/tree/master/share/lua/http/requests

http://leslivresoublies.free.fr/leslivresoublies/VLC/Ligne/Les_interfaces_principales.html


## Quick Start

Donwload the plugin from SARAH's AppStore and follow online plugin's documentation  
   
