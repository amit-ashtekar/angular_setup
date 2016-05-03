/**
 * Created by amita on 5/3/2016.
 */
(function () {
    'use strict';
angular.module('SampleApp')

    .controller('MainController', [
        '$scope',
        function($scope) {
            $scope.test = "Testing.....";
        }
    ]);
}());
