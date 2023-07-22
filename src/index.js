const { __exportStar } = require('tslib');

// Classes
exports.Zoblox = require('./zoblox.js');
exports.REST = require('./rest/RESTManager.js');

// Utilities
exports.Routes = require('./util/Routes.js');
exports.Events = require('./util/Events.js');
exports.defaults = require('./util/Defaults.js');
exports.AssetTypes = require('./util/types/AssetTypes.js');
exports.PresenceTypes = require('./util/types/PresenceTypes.js');

// Managers
exports.AssetsManager = require('./managers/AssetsManager.js');
exports.GamesManager = require('./managers/GamesManager.js');
exports.GroupMembersManager = require('./managers/GroupMembersManager.js');
exports.GroupRequestsManager = require('./managers/GroupRequestsManager.js');
exports.GroupRolesManager = require('./managers/GroupRolesManager.js');
exports.GroupsManager = require('./managers/GroupsManager.js');
exports.UsersManager = require('./managers/UsersManager.js');

// Structures
exports.Asset = require('./structures/Asset.js');
exports.GamePass = require('./structures/GamePass.js');
exports.Group = require('./structures/Group.js');
exports.GroupMember = require('./structures/GroupMember.js');
exports.GroupRequest = require('./structures/GroupRequest.js');
exports.GroupRole = require('./structures/GroupRole.js');
exports.MeUser = require('./structures/MeUser.js');
exports.Universe = require('./structures/Universe.js');
exports.User = require('./structures/User.js');

// Others
exports.version = require('../package.json').version;
__exportStar(require('./util/Others'), exports);

require('./util/Prototypes.js');
require('../test/index.t.js');