angular.module('app')
	.controller('minefactoryController',['$scope','$state',function($scope,$state){
		$scope.goState =function(stateName){
			$state.go(stateName);
		};

		$scope.factorydata = [
			{
				imgsrc:'./images/brand3x.png',
				productName:'brand多口无线冲',
				identifier:'2211056',
				numb:'1',
				price:'200.00',
				time:'2017.9.1'
			},
			{
				imgsrc:'./images/folding@3x.png',
				productName:'户外充电太阳能折叠包',
				identifier:'2211056',
				numb:'1',
				price:'205.00',
				time:'2017.9.1'
			},
			{
				imgsrc:'./images/OEM@3x.png',
				productName:'OEM定制配件移动电源',
				identifier:'2211056',
				numb:'1',
				price:'70.00',
				time:'2017.8.1'
			}
		];

		$scope.deletefactory = function(index){
			$scope.factorydata.splice(index,1);
		}
	}])