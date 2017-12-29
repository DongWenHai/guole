angular.module('app')
	.controller('homesearchController',['$scope','$state',function($scope,$state){

		$scope.goState = function(stateName){
			$state.go(stateName);
		}

		$scope.hotsearch = [
			{content:'车载无线冲支架'},
			{content:'NT18主能源'},
			{content:'GP04启动电源'},
			{content:'GP01启动电源'},
			{content:'GP02启动电源'}
		];

		$scope.fastpower = [
			{content:'高通QC3.0'},
			{content:'双USB QC3.0'},
			{content:'超薄聚合物Type'},
			{content:'MTK全兼容'},
			{content:'高通QC2.0'},
			{content:'精灵球'}
		];

		$scope.emergencySupply = [
			{content:'10000ma应急'},
			{content:'12V车载应急点火'},
			{content:'防水电源'}
		];

		$scope.factorysearch = [
			{content:'YN-006手机移动电源'},
			{content:'【专利私模汽车启动电源】超大10000毫安'},
			{content:'GP01汽车启动电源'},
			{content:'classy1 豆豆版'},
			{content:'YN-012手机移动电源'}
		];

		$scope.searchContent = '';

		$scope.addHistory = function(){
			if($scope.searchContent == '') return;
			var o = {content: $scope.searchContent};
			$scope.factorysearch.push(o);
		};

		$scope.clearHistory = function(){
			$scope.factorysearch = [];
		}
	}])