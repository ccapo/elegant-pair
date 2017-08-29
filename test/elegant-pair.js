'use strict';

'use strict';

const should = require('should');

describe('Elegant Pair Tests', function() {
  it('should load the Elegant Pair library', function(done) {
    try {
      const elegantPair = require('../index');
      done();
    } catch (err) {
      done(err);
    }
  });
	
  it('should generate an elegant pair: x >= y', function(done) {
    try {
      const elegantPair = require('../index');
      let x = 92;
      let y = 23;
      let z = elegantPair.pair(x, y);
      should.equal(z, 8579);
      done();
    } catch (err) {
      done(err);
    }
  });
	
  it('should generate an elegant pair: x >= y', function(done) {
    try {
      const elegantPair = require('../index');
      let x = 23;
      let y = 92;
      let z = elegantPair.pair(x, y);
      should.equal(z, 8487);
      done();
    } catch (err) {
      done(err);
    }
  });
	
  it('should inverse an elegant pair: l < q', function(done) {
    try {
      const elegantPair = require('../index');
      let z = 8487;
      let xy = elegantPair.unpair(z);
      should.deepEqual(xy, [23, 92]);
      done();
    } catch (err) {
      done(err);
    }
  });
	
  it('should inverse an elegant pair: l >= q', function(done) {
    try {
      const elegantPair = require('../index');
      let z = 8579;
      let xy = elegantPair.unpair(z);
      should.deepEqual(xy, [92, 23]);
      done();
    } catch (err) {
      done(err);
    }
  });
});
