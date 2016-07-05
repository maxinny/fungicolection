(function() {
    'use strict';

    angular
        .module('app.especy')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listEspecy',
                config: {
                    url: '/especies',
                    templateUrl: 'app/especies/views/list.html',
                    controller: 'EspecyController',
                    controllerAs: 'vm',
                    title: 'Listado de Especies',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Especies'
                    }
                }
            },
            {
                state: 'createEspecy',
                config: {
                    url: '/especies/create',
                    templateUrl: 'app/especies/views/create.html',
                    controller: 'EspecyController',
                    controllerAs: 'vm',
                    title: 'Nueva Especie'
                }
            },
            {
                state: 'viewEspecy',
                config: {
                    url: '/especies/:especyId',
                    templateUrl: 'app/especies/views/view.html',
                    controller: 'EspecyController',
                    controllerAs: 'vm',
                    title: 'Detalle de la especie'
                }
            },
            {
                state: 'editEspecy',
                config: {
                    url: '/especies/:especyId/edit',
                    templateUrl: 'app/especies/views/edit.html',
                    controller: 'EspecyController',
                    controllerAs: 'vm',
                    title: 'Editar especie'
                }
            }
        ];
    }
})();
