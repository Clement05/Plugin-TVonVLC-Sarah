rem set /p path= < pathvlc.txt
rem set /p host= < hostvlc.txt
rem set /p port= < portvlc.txt

rem cd /D %path%
rem cd /D C:\Program Files (x86)\VideoLAN\VLC\
cd /D %1
rem start vlc --http-host %host%:%port%
start vlc --http-host 127.0.0.1:%2
rem %1
exit