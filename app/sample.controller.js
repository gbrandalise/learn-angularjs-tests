(() => {
    'use strict';
    angular.module('sampleApp')
        .controller('SampleController', SampleController);

    function SampleController($scope) {
        $scope.title = 'Tests AngularJS';
    }
})();