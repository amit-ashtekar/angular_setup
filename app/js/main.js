(function () {

'use strict';


  angular.module('SampleApp', ['ui.router', 'ngAnimate'])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // routes
      $urlRouterProvider.otherwise('/posts');

      $stateProvider
          .state('posts', {
            //  Posts state. This state will contain nested views
            url: '/posts',
            template: '<div>hi</div>'
          })
          .state('authors', {
            // Authors state. This state will contain multiple views
            url: '/authors',
            views: {} // we will fill this later
          });
    }
  ]);



}());
