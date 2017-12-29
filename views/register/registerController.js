angular.module('app')
	.controller('registerController',['$scope','$state',function($scope,$state){
		$scope.goState =function(stateName){
			$state.go(stateName);
		};
	}])