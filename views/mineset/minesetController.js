angular.module('app')
	.controller('minesetController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);
		}
	}])