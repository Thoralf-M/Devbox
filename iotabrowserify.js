//command: browserify iotabrowserify.js --standalone window| uglifyjs > iota.js-browser.js

global.bundle_validator = require('@iota/bundle-validator');
global.bundle = require('@iota/bundle');
global.checksum = require('@iota/checksum');
global.converter = require('@iota/converter');
global.core = require('@iota/core');
global.http_client = require('@iota/http-client');
global.signing = require('@iota/signing');
global.transaction_converter = require('@iota/transaction-converter');
global.transaction = require('@iota/transaction');
global.cda = require('@iota/cda');
global.extract_json = require('@iota/extract-json');