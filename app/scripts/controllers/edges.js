'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('EdgesController', function ($scope, edges, filterBy) {
    $scope.edges = edges.query();
    $scope.filterBy = filterBy;
    $scope.deleteEdge = function(edge){
      edge.$delete();
    };
    var selectedEdge = null;
    
    $scope.selectEdge = function(edge){
      selectedEdge = (selectedEdge === edge) ? null : edge;
    }
    
    $scope.isSelected = function(edge){
      return edge === selectedEdge;
    }
    
    $scope.displayRequirements = function(reqs) {
      var result = '';
      for(var i=0; i < reqs.length; i++){
        if(result !== '') { result += ', '; }
        if(reqs[i].name){
          result += reqs[i].name + ' ';
        }
        result += reqs[i].value;
      }
      return result;
    }
  });
