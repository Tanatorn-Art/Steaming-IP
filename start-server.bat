@REM @echo off
@REM cd /d "C:\Users\armmi\Desktop\Steaming-IP-Camera-Nodejs-master\src"
@REM node server.js
@REM pause

@echo off
cd /d "C:\Users\armmi\Desktop\Steaming-IP-Camera-Nodejs-master\src"
start /min cmd /k "node server.js"
timeout /t 3 /nobreak >nul
start http://localhost:8080/
exit