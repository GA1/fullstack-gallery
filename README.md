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

### Explanations for the choices I made when creating the app:

1. Git - I divided the project into two 2 parts to keep the clear distinction between the frontend SPA and
the backend. I keep it in one repo though as it make it easier to see versions from the same phases of development: 
that is the SPA from a given commit is always (more or less) compatible with the backend from the same commit

2. create-react-app. It's a perfect starter which 
minifies/uglifies the production code, gives good development tools and makes the app a web progressive app 
by default. 

3. React - create-react-app uses react. I choose to use react because it 
enforces writing the code in a declarative manner (vs jquery like imperative manner). 
The jsx feature which I use heavily in the components let me to move out much of the complexity from the ui.

4. Redux takes coding with react into the next level, it enforces to think about the app, as a collection 
of states and actions. An action leads from one state to another. It makes testing of the app much easier, as
all what's doable in the app is described by the actions we define.

5. Jest - I use this tool, because it's fast, intelligent (it detects changes, caches results, run failed tests first),
and full of cool features like: "do you want to run just one test?, just add '.only' before the test name".
  
6. Express - I use it because it's powerful, I can do both static files serving as well as create route-defined API. 
This is exactly what I needed for this task, to return the parts of the SPA as static files, and then from the client
attack the server's API endpoint(s) 

7. ES6 - write the code in a functional manner, great when operating on collections.

8. react-masonry-component - the only external react component I use in the app, it implements the 
masonry effect for the galllery. Please let me know if you would rather see me implement all the components by myself.

### Possible Improvements:

I have not implement any of those as they were not clearly specified, please let me know if you think some of the 
ones below are crucial, I could add them in 24h if you request it. 

1. Caching - the js/css bundles could have some Cache-Control or Etag headers specified. If someone decides to not cache
index.html (though it could be useful too), there's no problem as, js/css contain hashes in their file names.  
2. Use webpack for node backend too (create-react-app uses webpack in the frontend already). I chose to use a tailor-made
shell script because it is just simpler and clearly does the job of running the demo well.
3. Making the api a bit more complicated, but more open for extensions
4. Eject the create-react-app and tweak the dependencies.
5. It would be be cool to navigate the pictures with on press left/right keys.
6. Loading of new images could happen not only on reaching the bottom of the page, but also on reaching the last image 
in the Zoom mode (instead of hiding the right arrow on reaching the last downloaded photo)
7. UI, e2e testing
8. include test runs into the build process