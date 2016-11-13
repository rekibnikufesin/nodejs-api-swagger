'use strict';

var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
  host: 'localhost:9200',
  log: 'error'
});

module.exports = client;
