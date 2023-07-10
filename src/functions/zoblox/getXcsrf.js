module.exports = function() {
  return this.session.headers['X-CSRF-TOKEN'];
};