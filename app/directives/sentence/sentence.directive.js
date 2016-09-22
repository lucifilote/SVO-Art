'use strict';

angular.module('angularApp')
    .directive('sentence', [function () {
        return {
            replace: true,
            scope: {
                data: '='
            },
            controller: ['$scope', function ($scope) {
                var vm = this;
                vm.sentence = $scope.data;
                vm.wordTypes = {
                    s: 'Subject',
                    v: 'Verb',
                    o: 'Object'
                };
            }],
            controllerAs: 'vm',
            templateUrl: 'app/directives/sentence/sentence.tmpl.html',
        };
    }]);
