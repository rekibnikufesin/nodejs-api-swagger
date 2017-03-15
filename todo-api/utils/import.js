'use strict';

const ELASTICSEARCH = require('elasticsearch');
const SAMPLES = require('./sample-todos.json');
const CLUSTER = 'http://localhost:9200';
const INDEX = 'todo';
const TYPE = 'todo';
const CLIENT = new ELASTICSEARCH.Client({
    host: CLUSTER,
    apiVersion: '5.0'
});

SAMPLES.forEach((sample) => {
    console.log(`Saving Todo ${sample.todo} to Elasticsearch`);
    CLIENT.index({
        index: INDEX,
        type: TYPE,
        id: sample.todo_id,
        body: sample
    }, (error, response) => {
        if(error) {
            console.log('DOH! Something went wrong!');
        } else {
            console.log(response.result);
        }
    });
});