var should = require('should');
var UptimeExtras = require('../');

describe('test uptime date', function() {

  it('should provide a date for the time the server went up', function(done) {
    var ue = new UptimeExtras();
    ue.getUptimeDate().should.be.a.Date;
    done();
  });

  it('should check if the server has restarted since a given time', function(done) {
    var ue = new UptimeExtras();
    var hasRestarted = ue.hasRestartedSince(new Date());
    hasRestarted.should.be.a.Boolean;
    hasRestarted.should.be.false;
    done();
  });

});
