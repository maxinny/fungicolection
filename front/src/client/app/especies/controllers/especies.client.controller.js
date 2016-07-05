(function () {
    'use strict';

    angular
        .module('app.especy')
        .controller('EspecyController', EspecyController);

    EspecyController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Especy',
        'TableSettings',
        'EspecyForm'];
    /* @ngInject */
    function EspecyController(logger,
        $stateParams,
        $location,
        Especy,
        TableSettings,
        EspecyForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Especy);
        vm.especy = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = EspecyForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Especy object
            var especy = new Especy(vm.especy);

            // Redirect after save
            especy.$save(function(response) {
                logger.success('Especy created');
                $location.path('especies/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Especy
        vm.remove = function(especy) {

            if (especy) {
                especy = Especy.get({especyId:especy.id}, function() {
                    especy.$remove(function() {
                        logger.success('Especy deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.especy.$remove(function() {
                    logger.success('Especy deleted');
                    $location.path('/especies');
                });
            }

        };

        // Update existing Especy
        vm.update = function() {
            var especy = vm.especy;

            especy.$update(function() {
                logger.success('Especy updated');
                $location.path('especies/' + especy.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewEspecy = function() {
            vm.especy = Especy.get({especyId: $stateParams.especyId});
            vm.setFormFields(true);
        };

        vm.toEditEspecy = function() {
            vm.especy = Especy.get({especyId: $stateParams.especyId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Especy View');
        }
    }

})();
