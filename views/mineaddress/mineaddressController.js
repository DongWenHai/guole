angular.module('app')
	.controller('mineaddressController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.addressdata = [
			{
				username:'西门宇',
				phone:'137****9543',
				address:'深圳市龙华卫东龙商务大厦A1513'
			},
			{
				username:'西门宇',
				phone:'137****9543',
				address:'深圳市龙华卫东龙商务大厦A1513'
			}
		];
	}])