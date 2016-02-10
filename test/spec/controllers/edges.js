'use strict';

describe('EdgesController', function () {

  var scope, http, response;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope, $httpBackend){
    http = $httpBackend;
    response = [ { key: 'hello' } ];
    http.whenGET('/api/edges').respond(response);
    scope = $rootScope.$new();
    $controller('EdgesController', {
      $scope: scope
    });
  }));
  
  afterEach(function(){
    http.verifyNoOutstandingExpectation();
    http.verifyNoOutstandingRequest();
  });
  
  it('makes request to api to fetch edges', function(){
    http.expectGET('/api/edges');
    http.flush();
  });
  
  it('assigns response data to edges', function() {
      http.flush();
      expect(scope.edges[0].key).toEqual('hello');
  });

  describe('displayRequirements', function() {
    var reqs;
    it('it concatenates name and value of the requirement', function() {
      http.flush();
      reqs = [{ name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
    });
    
    it('ignores name if it is null', function() {
      http.flush();
      reqs = [{ name: null, value: 'Novice' }];
      expect(scope.displayRequirements(reqs)).toEqual('Novice');
    });
    
    it('requirements are delimited by comma', function() {
      http.flush();
      reqs = [{ name: null, value: 'Novice' }, { name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(reqs)).toEqual('Novice, Agility d6');
    });
  });
  
  describe('selectEdge', function() {
    var edge;
    it('it sets edge', function() {
      http.flush();
      edge = {
          name: 'Attractive'
        };
      scope.selectEdge(edge);
      expect(scope.isSelected(edge)).toBeTruthy();
    });
    
    it('it sets null when selected second time', function() {
      http.flush();
      edge = {
          name: 'Attractive'
        };
      scope.selectEdge(edge);
      scope.selectEdge(edge);
      expect(scope.isSelected(null)).toBeTruthy();
    });
  });
});
