'use strict';

describe('Service: RdioFactory', function () {

  // load the service's module
  beforeEach(module('listomaniaApp'));

  // instantiate service
  var RdioFactory;
  beforeEach(inject(function (_RdioFactory_) {
    RdioFactory = _RdioFactory_;
  }));

  it('should do something', function () {
    expect(!!RdioFactory).toBe(true);
  });

});
