'use strict';

angular.module('swFrontApp')
	.controller('NavigationController', function($scope, $location){
	$scope.isActive = function(path){
		var currentPath = $location.path().split('/')[1].split('?')[0];
		return currentPath === path.split('/')[1];
	}
});