(function() {
    'use strict';

    angular
        .module('app.especy')
        .factory('Especy', Especy);

    Especy.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Especy($resource, API_BASE_URL) {

        var params = {
            especyId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/especy/:especyId';

        return $resource(API_URL, params, actions);

    }

})();
