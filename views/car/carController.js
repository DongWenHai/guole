angular.module('app')
	.controller('carController',['$scope','$state','$ionicListDelegate',function($scope,$state,$ionicListDelegate){

		$scope.goConfirmPay = function(){
			var order = $scope.getconfirmorder();
			var c = JSON.stringify(order);
			$state.go('confirmpay',{confirm: c});
		};

		$scope.getconfirmorder = function(){
			var dataObj = [];
			for(var i=0;i<$scope.cardata.length;i++){
				if($scope.cardata[i].checkitem){
					dataObj.push($scope.cardata[i]);
				}
			}
			return dataObj;
		};

		$scope.cardata = [
			{
				imgsrc:'./images/brand_go3x.png',
				productName:'brand多口无线冲',
				identifier:'2211056',
				price:200.00,
				numb:1,
				checkitem:false
			},
			{
				imgsrc:'./images/classy1_go@3x.png',
				productName:'classy1 豆豆版',
				identifier:'2211056',
				price:98.00,
				numb:1,
				checkitem:false
			},
			{
				imgsrc:'./images/zuixin_go3x.png',
				productName:'化妆盒移动电源',
				identifier:'2211056',
				price:200.00,
				numb:1,
				checkitem:false
			},
			{
				imgsrc:'./images/folding@3x.png',
				productName:'户外充电太阳能折叠包',
				identifier:'2211056',
				price:130.01,
				numb:1,
				checkitem:false
			}
		];

		$scope.totalMoney = '0.00';
		$scope.allCheck = false;

		$scope.decreaseNum = function($index){
			if($scope.cardata[$index].numb<=1){
				return;
			}else{
				$scope.cardata[$index].numb = $scope.cardata[$index].numb - 1;
			}
			$scope.countTotalMoney();
		};

		$scope.increaseNum = function($index){
			$scope.cardata[$index].numb = parseInt($scope.cardata[$index].numb) + 1;
			$scope.countTotalMoney();
		};

		$scope.countTotalMoney = function(){
			var T = 0;
			for(var i=0;i<$scope.cardata.length;i++){
				if($scope.cardata[i].checkitem){
					T = T + $scope.cardata[i].numb*$scope.cardata[i].price;
				}
			}
			$scope.totalMoney = T == 0 ? '0.00' : T.toFixed(2);
		};

		$scope.changeCheckbox = function(){
			$scope.countTotalMoney();
			for(var i=0;i<$scope.cardata.length;i++){
				if(!$scope.cardata[i].checkitem){
					$scope.allCheck = false;
					return;
				}		
			}
			$scope.allCheck = true;
		};

		$scope.allSelect = function(){
			if($scope.allCheck){
				for(var i=0;i<$scope.cardata.length;i++){
					$scope.cardata[i].checkitem = true;
				}
			}else{
				for(var i=0;i<$scope.cardata.length;i++){
					$scope.cardata[i].checkitem = false;
				}
			}
			$scope.countTotalMoney();
		};

		$scope.delete = function(index){
			console.log(index);
			$scope.cardata.splice(index,1);
			$scope.countTotalMoney();
		}
	}])