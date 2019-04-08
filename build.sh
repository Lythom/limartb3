npx prettier --write "src/*.{html,css}"
npx postcss src/styles.css -u autoprefixer -u stylelint -o dist/styles.css
cp src/*.html dist/
cp -R src/lib/ dist/