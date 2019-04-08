CALL npx prettier --write "src/*.{html,css}"
CALL npx postcss src/styles.css -u autoprefixer -u stylelint -o dist/styles.css
copy /Y "src\*.html" "dist"
xcopy "src\lib" "dist\lib" /E /Y