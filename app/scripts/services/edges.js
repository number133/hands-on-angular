'use strict';

angular.module('swFrontApp').service('edges', function() {
   this.query = function() {
       return [
        {
          name: 'Attractive',
          description: 'blah...',
          category: {
            name: 'Background'
          },
          requirements: [
            { name: null, value: 'Novice', mode: 'rank' },
            { name: 'Vigor', value: 'd6'}
          ]
        },
        {
          name: 'Woman',
          description: 'blah...',
          category: {
            name: 'Combat'
          },
          requirements: [
            { name: null, value: 'Seasoned', mode: 'rank' },
          ]
        },
        {
          name: 'Walks by',
          description: 'blah...',
          category: {
            name: 'Leadership'
          },
          requirements: [
            { name: null, value: 'Third' },
          ]
        }
      ];
   } 
});