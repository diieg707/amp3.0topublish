@echo off
set "$New_line=#test#"
for /R "C:\Export\amp3.0\https@amopornobr.com\videos-porno" %%A in (*.htm) do (
  >>"%%A" echo %$New_line%
  type "%%A" >> "%%~dpANew_%%~nxA"
  del "%%A" 2>nul
  ren "%%~dpANew_%%~nxA" "%%~nxA"
)