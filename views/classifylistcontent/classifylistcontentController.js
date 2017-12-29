angular.module('app')
	.controller('classifylistcontentController',['$scope','$state','$stateParams',function($scope,$state,$stateParams){

		$scope.listdata = $scope.listdata == "" ? "" : JSON.parse($stateParams.listdata);

	}])