# Todo API Server built with [Swagger (a.k.a. The OpenAPI Spec)](http://swagger.io/)

This repo contains the Todo API server built with Swagger, part of the Egghead.io series on *Creating Node.js APIs with Swagger*.

## Getting Started
- Clone the repo. Switch to the todo-api directory in the repo downloaded.
- Install dependencies with `npm install`
- Ensure you have swagger installed globally with `npm install swagger -g`
- Start the node.js application using Swagger with `swagger project start`
- Alternately, you can run the API server using nodejs-dashboard with `npm run dev`
  - Ensure you have nodejs-dashboard installed with `npm install nodejs-dashboard -g`
- Launch the swagger editor to view/edit the API definition with `swagger project edit`

## Using jmeter
- Download and extract jmeter
- Launch jmeter by navigating to the folder you downloaded, run `bin/jmeter`
- Open the `jmeterTest.jmx` file in this repo to load test the API server

## Additional Info:
- Swagger NPM package can be found [here](https://www.npmjs.com/package/swagger)
- Elasticsearch NPM client used is [here](https://www.npmjs.com/package/elasticsearch)
- nodejs-dashboard from Formidable Labs can be found [here](https://github.com/FormidableLabs/nodejs-dashboard)
- Apache jmeter can be found [here](http://jmeter.apache.org/)

## Running Elasticsearch and Sample Data:
Some people have mentioned that they don't have access to an Elasticsearch cluster and aren't familiar with it either. To remove that as an obstacle for following along with this course, I have added a docker-compose file to set you up with elasticsearch and import the sample data seen in the lessons.

To use it, clone this repo:
`git clone git@github.com:rekibnikufesin/nodejs-api-swagger.git`

Change directory into the cloned repo:
`cd nodejs-api-swagger`

Launch the elasticsearch instance:
`docker-compose up`

This will launch docker with an elasticsearch container and a kibana container (not covered in the course, but it's here if you want to play with it at `http://localhost:5601`). The containers will run in the foreground so you can see any errors or activity in this console window.

Open a new console window, navigate to this same directory for the repo

Change directory into the todo-api subdirectory
`cd todo-api`

Run npm install to install the necessary dependencies:
`npm install`

Run the node command to import the sample data:
`node utils/import.js`

You should receive success/confirmation messages for each item added to elasticsearch
Check to see that the `todo` index was created, it should be listed in the indices for the elasticsearch container:
`curl localhost:9200/_cat/indices?v`

If you want to see the data imported:
`curl localhost:9200/todo/_search&q=*`

This should provide the minimum needed to complete this course. If you have problems, be sure to let me know via the course discussion forums or on Twitter: @wfbutton.

If you'd like to learn more about Elasticsearch, I've got a new course coming to Egghead.io on it in Q2 2017. Check out [http://willbutton.co/openapi/](http://willbutton.co/openapi/). At the bottom, you'll find a signup form to get sneak peeks and insider info on the course before it launches!