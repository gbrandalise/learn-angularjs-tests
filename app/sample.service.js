(() => {
    'use strict';
    angular.module('sampleApp')
        .service('sampleService', sampleService);

    function sampleService($http) {
        return {
            findAll: () => {
                return $http.get('api.json');
            }
        };
    }
})();