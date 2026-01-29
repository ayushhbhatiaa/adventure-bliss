@echo off
REM apply_patch_and_push.bat
REM Usage: double-click or run from project root. Optional first arg is REMOTE_URL.

:: Check for git
ngit --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo Git not found in PATH. Please install Git for Windows: https://git-scm.com/download/win
  pause
  exit /b 1
)

:: Ensure we are in project root (script dir)
cd /d "%~dp0"

:: Apply patch file
if exist trips.spec.fix.patch (
  git apply trips.spec.fix.patch || (
    echo Failed to apply patch. Aborting.
    pause
    exit /b 1
  )
) else (
  echo Patch file trips.spec.fix.patch not found. Aborting.
  pause
  exit /b 1
)

:: Configure branch and commit
git checkout -b main 2>nul || git checkout main 2>nul
git add src/app/components/trips/trips.spec.ts
git commit -m "test: fix TripsComponent spec declarations" || (
  echo Nothing to commit or commit failed.
)

:: Optionally add remote and push
if "%1"=="" (
  echo No remote provided. To push, run: git remote add origin <REMOTE_URL> & git push -u origin main
) else (
  git remote add origin %1 2>nul || echo remote origin already exists
  git push -u origin main
)

necho Done.
pause