const REST = require('./rest/RESTManager.js');

// Classes
exports.Zoblox = require('./zoblox.js');
exports.REST = REST;

// Utilities
exports.Routes = require('./util/Routes.js');
exports.Events = require('./util/Events.js');
exports.WebSocketEvents = require('./util/WebSocketEvents.js');
exports.PresencesTypes = require('./util/types/PresencesTypes.js');
exports.WebSocketTypes = require('./util/types/WebSocketTypes.js');

// Others
exports.version = require('../package.json').version;

require('./util/Prototypes.js');
require('../test/index.t.js');