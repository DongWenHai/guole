angular.module('app')
	.controller('loginController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);
		}
	}])