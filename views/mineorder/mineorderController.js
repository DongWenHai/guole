angular.module('app')
	.controller('mineorderController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.orderNav = [
			{
				navName:'全部订单',
				bool: true
			},
			{
				navName:'待付款',
				bool: false
			},
			{
				navName:'待收货',
				bool: false
			},
			{
				navName:'待发货',
				bool: false
			}
		];

		$scope.allorderdata = [
			{
				imgsrc:'./images/brand_my@3x.png',
				productName:'brand多口无线冲',
				identifier:'2211056',
				numb:1,
				price:200.00,
				orderstate:true
			},
			{
				imgsrc:'./images/qc2.0_my@3x.png',
				productName:'高通QC2.0/3.0快充',
				identifier:'2211056',
				numb:1,
				price:200.00,
				orderstate:false
			},
		];

		$scope.waitpaydata = [
			{
				imgsrc:'./images/YN-013@3x (2).png',
				productName:'YN-013移动电源',
				identifier:'2211056',
				numb:1,
				price:180.00,
				orderstate:false
			}
		];

		$scope.waitcollectdata = [
			{
				imgsrc:'./images/outside_s@3x.png',
				productName:'户外储存电源折叠包',
				identifier:'2211056',
				numb:1,
				price:205.00,
				orderstate:false
			}
		];

		$scope.waitsenddata = [
			{
				imgsrc:'./images/brand_fa@2x.png',
				productName:'brand多口无线冲',
				identifier:'2211056',
				numb:1,
				price:200.00,
				tradeNum:2017555164984341,
				orderstate:false
			}
		];


		
		$scope.index = 0;

		$scope.setnavbool = function(index){
			for(var i=0;i<$scope.orderNav.length;i++){
				if(i == index){
					$scope.orderNav[i].bool = true;
					console.log(index,$scope.orderNav[i].bool);
				}else{
					$scope.orderNav[i].bool = false;
					console.log(i,$scope.orderNav[i].bool);
				}
			}
		};

		$scope.onSlideChanged = function(index){
			$scope.index = index;
			console.log($scope.index);
			$scope.setnavbool($scope.index);
			console.log($scope.orderNav);
		};

		$scope.toggolIndex = function(index){
			$scope.onSlideChanged(index);
		};

		$scope.deleteList = function(index){
			for(var i=0;i<$scope.allorderdata.length;i++){
				$scope.allorderdata.splice(index,1);
			}
		};
	}])