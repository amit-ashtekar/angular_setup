/**
 * Created by amita on 5/4/2016.
 */

(function () {
    'use strict';
    angular.module('SampleApp')

        .controller('appCtrl', [
            '$scope','$window', '$stateParams',
            function($scope,$window, $stateParams) {
                $scope.id = 1;



            }
        ]);
}());
