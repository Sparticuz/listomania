'use strict';

describe('Service: ListFactory', function () {

  // load the service's module
  beforeEach(module('topAlbumsApp'));

  // instantiate service
  var ListFactory;
  beforeEach(inject(function (_ListFactory_) {
    ListFactory = _ListFactory_;
  }));

  it('should do something', function () {
    expect(!!ListFactory).toBe(true);
  });

});
