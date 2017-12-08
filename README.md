# Acari Landing Project

---

I assume since you are reading this that you probably want to know more about this project.
I guess that is what a README is for, right?

Rather that tell you I can just show you.

## [Here is the live example](https://acari.io)

---

### Local Deployment

To run this project locally you will need the following goodies:

 - [Docker 17.09.0](https://www.docker.com/) 
 - [Docker-Compose 1.12.0](https://docs.docker.com/compose/install/)
 
All you have to do is at the root of this repository run:
    `docker-compose up -d`

Boom! You are done.

What this does is starts a Mongo server that is running with TLS configured.
In addition to mounting the data location to dataDump in the root of this repository.
So that when the Mongo server container gets removed, all of the data is saved.

The the spring boot web server is started, which runs on port 443.
Which means that you can access it via `https://localhost`. 
Granted, it is using a self signed certificate, so any browser is going to complain that `This site is unsecure!`.

All of the fancy packaged static web content is stored in web-service/src/main/resources/static.

---

### Local Development

If you want to make changes to any of this code, the unpackaged code exists in the web-content directory.
Famililarity with Angular 4 is a plus.

There exists a docker compose file that will allow you to install your node modules locally (node_models).

All you have to do is run `docker-compose -f docker-compose-build.yml up`.

Once that is done, you are free to make changes!
To move the changed code into the web server all you have to do is run, 


`docker-compose -f docker-compose-deploy.yml up` and that should transpile all of the typscript, bundle it up, and move it to web-service/src/main/resources

#### Live action development!

`docker-compose -f docker-compose-dev.yml up -d` will run the web server, mongo, and also serve the static web-content from browsersync.

The plus here is that you get live change updates, as the dev server will watch all web-content files for changes.

The dev server runs on `https://localhost:3000`. 

Fun fact, if you make any changes to typscript files, you will have to recompile the code to get the changes to take hold.

You could create a script that has this as the command:

`docker run --rm -v /home/alex/workspace/acari-landing/web-content:/app alexsimons/nodebuild run compile` replacing /home/alex/workspace with whatever you put the repository. 

![END](images/end.jpg)