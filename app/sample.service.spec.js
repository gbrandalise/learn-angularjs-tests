describe("sampleService Tests", () => {

    let $service;
    let $httpBackend;
  
    beforeEach(module('sampleApp'));
  
    beforeEach(inject((sampleService, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;
      $service = sampleService;
    }));
  
    it('findAll from API', (done) => {
      $httpBackend.expectGET('api.json')
        .respond(200, [{"id": 1, "name": "test1"}, {"id": 2, "name": "test2"}]);
      $service.findAll().then((response) => {
        expect(response.data.length).toBe(2);
        done();
      });
      $httpBackend.flush();
    });
  });
  