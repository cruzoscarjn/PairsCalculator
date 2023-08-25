const { commandsParser } = require('./src/CommandsParser.js');

(function entryPoint() {
  try {
    const args = process.argv.slice(2);

    const result = commandsParser(args);

    if (result.length > 0) {
      console.log(result.join('\n'));
    } else {
      console.log('No match found');
    }
  } catch (error) {
    console.error(error.message);
  }
}());
