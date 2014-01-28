var os = require('os');

module.exports = UptimeExtras;

function UptimeExtras(opts) {
  if (!(this instanceof UptimeExtras)) return new UptimeExtras(opts);

  opts = opts || {};

  if (!opts.date || !opts.uptime) {
    this.uptime = os.uptime();
    this._upDate = toSeconds(Date.now()) - this._uptime;
  } else {
    this.uptime = opts.uptime;
    this._upDate = toSeconds(opts.date) - this._uptime;
  }

  this.upDate = new Date(toMilliseconds(this._upDate));
  return this;
}

UptimeExtras.prototype.getUptimeDate = function() {
  return this.upDate;
}

UptimeExtras.prototype.hasRestartedSince = function(date) {
  return this._upDate > date.getTime();
}

function toSeconds(milliseconds) {
  return milliseconds / 1000;
}

function toMilliseconds(seconds) {
  return seconds * 1000;
}
