'use strict';

describe('EdgesController', function () {

  var scope;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope, $location){
    scope = $rootScope.$new();
    $controller('EdgesController', {
      $scope: scope
    });
  }));

  describe('displayRequirements', function() {
    var reqs;
    it('it concatenates name and value of the requirement', function() {
      reqs = [{ name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
    });
    
    it('ignores name if it is null', function() {
      reqs = [{ name: null, value: 'Novice' }];
      expect(scope.displayRequirements(reqs)).toEqual('Novice');
    });
    
    it('requirements are delimited by comma', function() {
      reqs = [{ name: null, value: 'Novice' }, { name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(reqs)).toEqual('Novice, Agility d6');
    });
  });
  
  describe('selectEdge', function() {
    var edge;
    it('it sets edge', function() {
      edge = {
          name: 'Attractive'
        };
      scope.selectEdge(edge);
      expect(scope.isSelected(edge)).toBeTruthy();
    });
    
    it('it sets null when selected second time', function() {
      edge = {
          name: 'Attractive'
        };
      scope.selectEdge(edge);
      scope.selectEdge(edge);
      expect(scope.isSelected(null)).toBeTruthy();
    });
  });
});
