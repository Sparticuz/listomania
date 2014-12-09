'use strict';

describe('Service: LastFmFactory', function () {

  // load the service's module
  beforeEach(module('topAlbumsApp'));

  // instantiate service
  var LastFmFactory;
  beforeEach(inject(function (_LastFmFactory_) {
    LastFmFactory = _LastFmFactory_;
  }));

  it('should do something', function () {
    expect(!!LastFmFactory).toBe(true);
  });

});
