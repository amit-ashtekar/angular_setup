/**
 * Created by amita on 5/3/2016.
 */
(function () {
    'use strict';
angular.module('SampleApp')

    .controller('MainController', [
        '$scope','$window', '$state',
        function($scope,$window, $state) {
            $scope.transition = 'slide-left';

           // next();

            function next(name)
            {
                //$scope.currentIndex = $scope.currentIndex+1 < $scope.maxIndex ? $scope.currentIndex+1 : 0;
                //var name = $scope.tabs[$scope.currentIndex];
                $state.go( name );
            }

            $scope.left = function(name)
            {
                $scope.transition = 'slide-left';
                next(name);
            };

            $scope.right = function(name)
            {
                $scope.transition = 'slide-right';
                next(name);
               // $state.go('tab3');
            };

            $scope.top = function(name)
            {
                $scope.transition = 'slide-top';
                next(name);
            };

            $scope.bottom = function(name)
            {
                $scope.transition = 'slide-bottom';
                next(name);
            };

        }
    ]);
}());
