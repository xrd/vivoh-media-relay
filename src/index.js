const {start} = require('./main');
const {processConfig} = require('./config');
const {run} = require('./server');
const {timebomb} = require('./timebomb');
const {hlsRun} = require('./mode');
const {setupOutputOptions} = require('./output');
const {failure} = require('./errors');
const processedArguments = require('minimist')(process.argv.slice(2));
const {banner} = require('./output');
const {usage} = require('./usage');

const config = processConfig(processedArguments);

setupOutputOptions(processedArguments);

timebomb();
banner();

if (!config.valid) {
  usage();
} else {
  start(config, {
    hlsRun,
    run,
    failure,
  });
}
