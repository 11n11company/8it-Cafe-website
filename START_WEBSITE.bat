@echo off
echo Starting 8itcafe website...
cd /d "%~dp0"
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)
echo Launching development server at http://localhost:5173...
call npm run dev
pause
