# fullstack-gallery

prerequisites: `npm`, `npx`, `node`, a unix like system 

Build and run the gallery in prod mode with this one liner:
```
export FLICKR_API_KEY={YOUR_FLICKR_API_KEY} && sh build-and-run.sh

```

And then type in the browser 
```
localhost:4000

```

It will return a SPA gallery

### Find below short explanations for the choices I took when creating the app:

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

1. Use webpack for node backend too (create-react-app uses webpack in the frontend already). I chose to use a tailor-made
shell script because it is just simpler and clearly does the job of running the demo well.
2. I stood before a choice of making the API simple, or more complicated but open for extensions. I choose the first
as nothing was sad about possible extensions.
3. Eject the create-react-app and tweak the dependencies.
4. It would be be cool to navigate the pictures with on press left/right keys.
5. Loading of new images could happen not only on reaching the bottom of the page, but also on reaching the last image 
in the Zoom mode (instead of hiding the right arrow on reaching the last downloaded photo)