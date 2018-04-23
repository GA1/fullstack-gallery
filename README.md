# fullstack-gallery

Find more info in the README files in corresponding `frontend-spa` and `backend` folders. 

#### prerequisites:
`npm`, `npx`, `node`, a unix like system 

#### Development mode 

To build run the gallery in development mode open a console tab and type:
```
cd backend && npm install && export FLICKR_API_KEY={YOUR_FLICKR_API_KEY} && npx nodemon npm start
```
and in another console tab:
```
cd frontend-spa && npm install && npm start
```

then go to:
```
localhost:3000
```

#### Prod mode

Build and run the gallery in prod mode with this one liner:
```
export FLICKR_API_KEY={YOUR_FLICKR_API_KEY} && sh build-and-run.sh

```

And then type in the browser 
```
localhost:4000

```

It will return a SPA gallery