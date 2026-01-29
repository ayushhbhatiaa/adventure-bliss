# apply_patch_and_push.ps1 - PowerShell script to apply patch and push to remote
param(
  [string]$RemoteUrl
# optional
# Usage: .\apply_patch_and_push.ps1 -RemoteUrl 'https://github.com/user/repo.git'
)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not installed or not in PATH. Install Git: https://git-scm.com/download/win"
  exit 1
}

Push-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition)

if (-not (Test-Path -Path './trips.spec.fix.patch')) {
  Write-Error 'Patch file trips.spec.fix.patch not found in project root.'
  Pop-Location
  exit 1
}

git apply trips.spec.fix.patch || { Write-Error 'Failed to apply patch.'; Pop-Location; exit 1 }

# Ensure main branch exists
try { git checkout -b main } catch { git checkout main }

git add src/app/components/trips/trips.spec.ts
try { git commit -m 'test: fix TripsComponent spec declarations' } catch { Write-Host 'Nothing to commit or commit failed.' }

if ($RemoteUrl) {
  git remote add origin $RemoteUrl -f 2>$null
  git push -u origin main
} else {
  Write-Host 'No remote provided. To push, run: git remote add origin <REMOTE_URL> ; git push -u origin main'
}

Pop-Location
Write-Host 'Done.'