module.exports = function(GroupId) {
  return this.groups.some(e => e.group.id == GroupId);
}