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

# run
npm run start