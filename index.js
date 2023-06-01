const REST = require('./lib/rest/RESTManager.js');

// Classes
exports.Zoblox = require('./lib/index.js');
exports.REST = REST;

// Utilities
exports.Routes = require('./lib/util/Routes.js');
exports.Events = require('./lib/util/Events.js');
exports.WebSocketEvents = require('./lib/util/WebSocketEvents.js');
exports.PresencesTypes = require('./lib/util/types/PresencesTypes.js');
exports.WebSocketTypes = require('./lib/util/types/WebSocketTypes.js');

// Others
exports.version = require('./package.json').version;

require('./lib/util/Prototypes.js');
require('./test/index.t.js');