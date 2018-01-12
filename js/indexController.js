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
			isLogin: 0,
			nickname: '',
			uid: ''
		};

		$rootScope.addProduct = {
			uid:'',
			pid:'',
			pname: '',
			count: '',
			price:'',
			address: '',
			code:'',
			imgsrc:''
		}
	}])