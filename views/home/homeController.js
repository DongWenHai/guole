angular.module('app')
	.controller('homeController',['$scope', '$state','$http',function($scope,$state,$http){

		//头部按钮
		$scope.muneSelected = false;
		$scope.muneselect = function(){
			$scope.muneSelected = $scope.muneSelected == false ? true : false;
		};
		//banner
		$scope.banner = {
			doesContinue: "true",
			autoPlay: "true",
			slideInterval: "2000"
		};

		$scope.bannerimgsrc = [
			'./images/banner1.png',
			'./images/banner2.png',
			'./images/banner3.png'
		];
		//产品类型
		$scope.producttype = [
			{
				imgsrc:'./images/phone_i@3x.png',
				name: '手机通讯类',
				stateName:'phoneclassify'
			},
			{
				imgsrc:'./images/car_i@3x.png',
				name: '汽车点火类',
				stateName:'carfireclassify'
			},
			{
				imgsrc:'./images/computer_i@3x.png',
				name: '笔记本数码类',
				stateName:'notebookclassify'
			},
		];
		//热门产品
		$scope.hotproducts = [
			{
				imgsrc:'./images/gp04_i@3x.png',
				name:'专利私模应急电源',
				price:'310.00'
			},
			{
				imgsrc:'./images/mili_i@3x.png',
				name:'迷你果乐移动充',
				price:'79.00'
			},
			{
				imgsrc:'./images/ta_i@3x.png',
				name:'果乐10000毫安大容量',
				price:'179.00'
			},
			{
				imgsrc:'./images/qc03_i@3x.png',
				name:'新款高通QC3.0快充',
				price:'125.00'
			}
		];
		//户外必备
		$scope.necessaryProducts = [
			{
				imgsrc:'./images/officei4_i@3x.png',
				name:'超薄便携M13',
				price:'130.00'
			},
			{
				imgsrc:'./images/brand_i@3x.png',
				name:'化妆盒移动电源',
				price:'200.00'
			},
			{
				imgsrc:'./images/empty_i@3x.png',
				name:'弹夹式移动电源',
				price:'130.00'
			}
		];
		//时尚新品
		$scope.fashionProduct = [
			{
				imgsrc:'./images/M13@3x.png',
				name:'超薄便携M13',
				price:'125.00'
			},
			{
				imgsrc:'./images/zuixin_i@3x.png',
				name:'化妆盒移动电源',
				price:'75.00'
			},
			{
				imgsrc:'./images/gun_i@3x.png',
				name:'弹夹式移动电源',
				price:'200.00'
			}
		];

		$scope.goState = function(stateName){
			$state.go(stateName);
		}



	}])