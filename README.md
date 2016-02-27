Be Hapi
==========

Boilerplate Hapi Web and API Server Example

## The Goal:
Create a base boilerplate example showing how easy it is to get started with Hapi as a web server.

## The Stack:
**Node.js** - Because it's fast, easy to get started, and Javascript is awesome.
[http://nodejs.org/](http://nodejs.org/)

**Hapi** - A very well designed server framework that is easy to understand, easy to create your own plugins, scales very well, cache options built in, and more.
[http://hapijs.com/](http://hapijs.com/)

**Swig** - It looks like HTML, it's very fast, great for template inheritance, and allows you to use HTML syntax with the server and with front-end client Javascript includes.
[http://paularmstrong.github.io/swig/](http://paularmstrong.github.io/swig/docs/#browser)

**CSS Framework** - None. Choose your own CSS preprocessor and CSS framework.

**Gulp** - A task runner for your assets, and can do a lot more. The performance is amazing and it is easy to get started. [http://gulpjs.com/](http://gulpjs.com/)

### Requirements:
Install Node.js by using the big install button on the [http://nodejs.org/](http://nodejs.org/) homepage.

After Node.js is installed, clone this repo, change `cd` to this directory, and run `npm install`

```bash
$ git clone https://github.com/sethbergman/get-hapi.git
$ cd get-hapi
$ npm install
```

Start the server by running the command:
```
$ npm start
```

#### Production
Before going into production you will want to concatenate and minify your assets. This will increase performance on your site. We will use Gulp for this.

To install run:
```
npm install -g gulp
```

Now you can run `gulp` from the command line and it will run the tasks in the `gulpfile.js`. The current tasks will minify and optimize your CSS, JS, and Images. If you want to run more tasks you can go to the Gulp Plugin page. [http://gratimax.github.io/search-gulp-plugins/](http://gratimax.github.io/search-gulp-plugins/)

## Plugins
The Hapi plugins that are being used.

#### Hapi-Named-Routes
Added names to the routes. This allows you to have access to the path in the templates just by using the `path.nameofroute` variable. [https://github.com/poeticninja/hapi-named-routes](https://github.com/poeticninja/hapi-named-routes)

#### Hapi-Assets
Assets are in the `./assets.js` file, and your view layer has access based on the node environment. If you are in `development` (default) you might want to have individual files (js,css). If you are in `production` you would want the assets combined for user performance. [https://github.com/poeticninja/hapi-assets](https://github.com/poeticninja/hapi-assets)

#### Hapi-Cache Buster
Client/browser reloads new assets based on package.json version of your application. [https://github.com/poeticninja/hapi-cache-buster](https://github.com/poeticninja/hapi-cache-buster)

#### Folder Structure
There are two main folders in the stack. The "**public**" folder for front-end (client side) code, and "**server**" folder for server side code.

Specifying the front-end and server side folders is a great habit to learn. It allows you to change from a full front-end app, ie Phonegap, to a front-end and server side app without changing your folder structure. It will provide some organization with your stack, projects, and tools.
