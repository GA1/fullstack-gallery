# building spa
cd frontend-spa/
npm install
npm run build
cd ..

# building backend
cd backend/
npm install

# move spa to backend static 'public' folder
rm -rf public
mkdir public
mv ../frontend-spa/build/* public

# make production code obfuscated
rm public/static/js/*.js.map
rm public/static/css/*.css.map

# run
npm run start