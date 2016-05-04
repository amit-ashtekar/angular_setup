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
            $scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
            $scope.currentIndex = -1;
            $scope.maxIndex = $scope.tabs.length;
            $scope.left = false;

           // next();

            function next()
            {
                $scope.currentIndex = $scope.currentIndex+1 < $scope.maxIndex ? $scope.currentIndex+1 : 0;
                var name = $scope.tabs[$scope.currentIndex];
                $state.go( name );
            }

            $scope.left = function()
            {
                $scope.transition = 'slide-left';
                next();
            };

            $scope.right = function()
            {
                $scope.transition = 'slide-right';
                next();
               // $state.go('tab3');
            };

            $scope.top = function()
            {
                $scope.transition = 'slide-top';
                next();
            };

            $scope.bottom = function()
            {
                $scope.transition = 'slide-bottom';
                next();
            };

        }
    ]);
}());
