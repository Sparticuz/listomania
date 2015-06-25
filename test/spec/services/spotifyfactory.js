'use strict';

describe('Service: SpotifyFactory', function () {

  // load the service's module
  beforeEach(module('listomaniaApp'));

  // instantiate service
  var SpotifyFactory;
  beforeEach(inject(function (_SpotifyFactory_) {
    SpotifyFactory = _SpotifyFactory_;
  }));

  it('should do something', function () {
    expect(!!SpotifyFactory).toBe(true);
  });

});
