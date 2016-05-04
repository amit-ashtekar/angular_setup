(function () {

'use strict';


  angular.module('SampleApp', ['ui.router', 'ngAnimate'])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // routes
     // $urlRouterProvider.otherwise('/tab1');

        $stateProvider
            .state('tab1', {
                name: 'tab1',
                url: '/tab1',
                template: '<div class="tab tab1"><h1>Tab1 screen</h1></div>'
            })
            .state('tab2', {
                name: 'tab2',
                url: '/tab2',
                template: '<div class="tab tab2"><h1>Tab2 screen</h1></div>'
            })
            .state('tab3', {
                name: 'tab3',
                url: '/tab3',
                template: '<div class="tab tab3"><h1>Tab3 screen</h1></div>'
            })
            .state('tab4', {
                name: 'tab4',
                url: '/tab4',
                template: '<div class="tab tab4"><h1>Tab4 screen</h1></div>'
            })



            .state('gotopage', {
                url: '/gotopage',
                template: '<h1>This Is A gotopage Page</h1>'
            })
            .state('gotopagewithparam', {
                url: '/gotopagewithparam/:id/:location',
                controller:'gotopageCtrl',
                template: '<h1>This Is A gotopage with Following Params:id:{{id}} and location:{{location}}</h1>'
            })



            .state('home', {
                url: '/home',
                data:{
                    customData1:  "customedata1",
                    customData2:  "customedata2"
                },
                resolve: {
                    person: function() {
                        return {
                            name: "Amit",
                            email: "amit.ashtekar@synerzip.com"
                        };
                    }

                },
                templateUrl: '../partials/partial1.html'
            })
            .state('home.one', {
                url: '/one',
                templateUrl: '../partials/partial2.html',
                controller: function($scope,$state,person) {
                    $scope.dogs = person;
                    console.log($state.current.data.customData1);
                    $scope.dataReceived=$state.current.data.customData1;
                }
            })
            .state('home.two', {
                url: '/two',
                template: '<h1>Home Two state page</h1>'
            })




            .state('app', {
                url: '/app',

                resolve: {
                    currentDetails: function(DataFactory) {
                        return  DataFactory.LoadData();
                    }

                },
                templateUrl: '../partials/partial3.html'
            })
            .state('app.one', {
                url: '/one',
                templateUrl: '../partials/partial4.html',
                controller: 'appCtrl'
            });

    }
  ])
    .run(['$state','$rootScope', function($state,$rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState){
            if(toState.data) {
                var passedObj = toState.data.customData1 + " " + toState.data.customData2;
                console.log(passedObj);
            }

        });
    }]);



}());
