var Person = require('./Person'),
    logger = require('./logger');

var moussi = new Person({
    firstName:'Aymen',
    lastName:'Moussi',
    age:27,
    knowsKungFu:true
});

logger.info('Does '+ moussi.firstName +' know kung-fu?');
logger.info(moussi.knowsKungFu ? 'You better believe it!' : 'Nope.');

