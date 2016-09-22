'use strict';

angular.module('angularApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "app/views/home.html",
                controller: 'HomeCtrl',
                resolve: {
                    sentences: ['SentenceService', function (SentenceService) {
                        return SentenceService.getSentences();
                    }]
                }
            });

        $urlRouterProvider.otherwise("/#");

    }]);