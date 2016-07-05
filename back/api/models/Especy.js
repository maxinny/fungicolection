/**
 * Especy.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombre: 'string',
      filo:   'string',
      macros: 'text',
      micros: 'text',
      temporada: {
          type: 'string',
          enum: ['invierno', 'primavera', 'verano','otoño']
      },
      calidad:  {
        type: 'string',
        enum: ['mortal','toxica','venenosa','sin valor','mediocre','comestible con precacion','buena','muy buena','excelente']
      },
      olor:     'string',
      sabor:    'string',
      textura:  'string',
      color:    'string',
      confusiones:  {
        collection: 'especy'
      }
  }
};
