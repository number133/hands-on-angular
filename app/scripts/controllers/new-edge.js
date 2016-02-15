'use strict';

angular.module('swFrontApp').controller('NewEdgeController', function($scope, edges, ranks, categories){
    $scope.newEdge = new edges;
    $scope.ranks = ranks.query().slice(1);
    $scope.categories = categories.query();
    
    $scope.createEdge = function(){
      var edge = $scope.newEdge.$save();
      edge.then(function(response){
        $scope.edges.push(response);
        $scope.newEdge = new edges;
      });
    };
});