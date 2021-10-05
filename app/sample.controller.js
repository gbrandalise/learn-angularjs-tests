(() => {
    'use strict';
    angular.module('sampleApp')
        .controller('sampleController', sampleController);

    function sampleController($scope, sampleService) {
        $scope.title = 'Tests AngularJS';
        sampleService.findAll().then((response) => {
            $scope.data = response.data;
        });
    }
})();