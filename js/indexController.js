angular.module('app')
	.controller('indexController',['$rootScope','$state',function($rootScope,$state){
		$rootScope.goState =function(stateName){
			$state.go(stateName);
		};

		$rootScope.goBack = function(){
			history.go(-1);
		};

		$rootScope.userinfor = {
			phone: '',
			isLogin: 1,
			nickname: '',
			uid: '12'
		};

		$rootScope.addProduct = {
			uid:'',
			pid:'',
			pname: '',
			count: '',
			address: '',
			code:'',
			imgsrc:''
		}
	}])