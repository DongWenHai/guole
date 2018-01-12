angular.module('app')
	.controller('carController',['$rootScope','$scope','$state','$ionicListDelegate','API','BombBox',function($rootScope,$scope,$state,$ionicListDelegate,API,BombBox){
		$scope.cardata = [];
		function initCar(){
			BombBox.loadingShow();
			API.fetchGet('http://127.0.0.1:9000/initCar', {uid: $rootScope.userinfor.uid})
				.then(function(data){
					formatData(data.data);
					BombBox.loadingHide();
				})
				.catch(function(err){
					console.log(err);
				})
		}
		initCar();

		function formatData(o){
			for(var i=0;i<o.length;i++){
				$scope.cardata.push({});
				$scope.cardata[i].pid = o[i].pid;
				$scope.cardata[i].imgsrc = o[i].imgsrc;
				$scope.cardata[i].productName = o[i].pname;
				$scope.cardata[i].identifier = o[i].code;
				$scope.cardata[i].price = o[i].price;
				$scope.cardata[i].numb = o[i].count;
				$scope.cardata[i].checkitem = false;
			}
		}
		

		$scope.goConfirmPay = function(){
			var order = $scope.getconfirmorder();
			if(order.length<1){
				BombBox.warBox('请选择商品');
				return;
			}
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

		$scope.delete = function(index, pid){
			$scope.cardata.splice(index,1);
			$scope.countTotalMoney();
			API.fetchGet('http://127.0.0.1:9000/deleteCarProduct',{pid: pid, uid: $rootScope.userinfor.uid})
				.then(function(data){
					if(data.data.statusCode != 600){
						BombBox.warBox(data.data.msg);
					}
				})
				.catch(function(err){
					console.log(err);
				})
		}
	}])