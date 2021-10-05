describe("SampleController Tests", () => {

  let $controller;
  let $scope;

  beforeEach(module('sampleApp'));

  beforeEach(inject((_$controller_) => {
    $scope = {};
    $controller = _$controller_('SampleController', {$scope: $scope});
  }));

  it('The title is "Tests AngularJS"', () => {
    expect($scope.title).toBe('Tests AngularJS');
  });
});
