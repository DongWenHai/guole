angular.module('app')
	.controller('carfireclassifyController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.carfireclassifydata = [
			{
				imgsrc:'./images/GP04@3x.png',
				name:'GP04汽车启动电源'
			},
			{
				imgsrc:'./images/car_usb@3x.png',
				name:'USB多口车载充电器'
			},
			{
				imgsrc:'./images/GP01@3x.png',
				name:'GP01汽车启动电源'
			},
			{
				imgsrc:'./images/GP02@3x.png',
				name:'GP02汽车启动电源'
			}
		]
	}])