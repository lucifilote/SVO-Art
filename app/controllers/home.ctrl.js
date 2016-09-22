'use strict';

angular.module('angularApp')
    .controller('HomeCtrl',
        ['$scope', 'sentences',
            function ($scope, sentences) {
                $scope.sentences = sentences;
            }]);
