/**
 * Created by amita on 5/4/2016.
 */
/**
 * Created by amita on 5/3/2016.
 */
(function () {
    'use strict';
    angular.module('SampleApp')

        .controller('gotopageCtrl', [
            '$scope','$window', '$stateParams',
            function($scope,$window, $stateParams) {
                $scope.id = $stateParams.id;


                $scope.location = $stateParams.location;
console.log($scope.id,$scope.location );
            }
        ]);
}());
