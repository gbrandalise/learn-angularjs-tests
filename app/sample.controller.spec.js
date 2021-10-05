describe("sampleController Tests", () => {

  let $scope;
  let $q;
  let sampleService;
  let deferred;

  beforeEach(module('sampleApp'));

  beforeEach(inject((_$controller_, $rootScope, _$q_, sampleService) => {
    $q = _$q_;
    $scope = $rootScope.$new();
    deferred = $q.defer();
    sampleService = sampleService;
    spyOn(sampleService, 'findAll').and.returnValue(deferred.promise);
    _$controller_('sampleController', {
      $scope, 
      sampleService
    });
  }));

  it('The title is "Tests AngularJS"', () => {
    expect($scope.title).toBe('Tests AngularJS');
  });

  it('The data is fetched from Service', () => {
    deferred.resolve({data: [{"id": 1, "name": "test1"}, {"id": 2, "name": "test2"}]});
    $scope.$apply();
    expect($scope.data.length).toBe(2);
  });
});
