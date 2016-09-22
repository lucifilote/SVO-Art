'use strict';

angular.module('angularApp')
    .factory('SentenceService', ['$q', function ($q) {
        var data = [{
            n: 1,
            s: 'Anna',
            v: 'is eating',
            o: 'a cookie'
        }, {
            n: 2,
            s: 'Henry',
            v: 'does',
            o: 'a handstand'
        }, {
            n: 3,
            s: 'Sarah',
            o: 'a pen'
        }, {
            n: 4,
            s: 'John',
            v: 'tells'
        }, {
            n: 5,
            s: '',
            o: 'a drama'
        }];

        var getSentences = function () {
            var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
        };

        return {
            getSentences: getSentences
        }
    }]);
