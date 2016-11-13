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
