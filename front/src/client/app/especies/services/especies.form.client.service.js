(function() {
    'use strict';

    angular
        .module('app.especy')
        .factory('EspecyForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'nombre',
                    type: 'input',
                    templateOptions: {
                        label: 'Nombre:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'filo',
                    type: 'input',
                    templateOptions: {
                        label: 'Especie:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'macro',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Macroscopia:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'micro',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Microscopia:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'temporada',
                    type: 'select',
                    templateOptions: {
                        options: [
                          {name:"invierno", id: 1},
                          {name:"primavera", id: 2},
                          {name:"verano", id: 3},
                          {name:"otoño", id: 4}
                        ],
                        label: 'Temporada:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'calidad',
                    type: 'select',
                    templateOptions: {
                      options: [
                        {name: 'mortal', id: 1},
                        {name: 'toxica', id: 2},
                        {name: 'venenosa', id: 3},
                        {name: 'sin valor', id: 4},
                        {name: 'mediocre', id: 5},
                        {name: 'comestible con precacion', id: 6},
                        {name: 'buena', id: 7},
                        {name: 'muy buena', id: 8},
                        {name: 'excelente', id: 9}
                      ],
                        label: 'Calidad:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'olor',
                    type: 'input',
                    templateOptions: {
                        label: 'Olor:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'sabor',
                    type: 'input',
                    templateOptions: {
                        label: 'Sabor:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'textura',
                    type: 'input',
                    templateOptions: {
                        label: 'Textura:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'color',
                    type: 'input',
                    templateOptions: {
                        label: 'Color:',
                        disabled: disabled,
                        required: false
                    }
                },
                {
                    key: 'confusiones',
                    type: 'input',
                    templateOptions: {
                        label: 'Posible confusión:',
                        disabled: disabled,
                        required: false
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
