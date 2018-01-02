angular.module('app')
	.controller('registerController',['$scope','$state','API','isValid','BombBox',function($scope,$state,API,isValid,BombBox){
		$scope.getcode = function(){
			API.fetchGet('http://127.0.0.1:9000/getcode')
				.success(function(data){
					$scope.codedata = data;
					console.log(data)
				})
				.error(function(data){
					console.log(data);
				});
		};
		
		$scope.registerData = {
			phone:'',
			password:'',
			repassword:'',
			imgCode:'',
			phoneCode:''
		};

		$scope.reg = {
			phone: /^(\+86){0,1}1[35678]\d{9}$/,
			password: /[0-9A-z]{6,16}/
		}

		function isValidconfirm(){
			if(!isValid.isNotEmputy($scope.registerData.phone)){
				BombBox.warBox('手机号码不能为空')
				return;
			}else if(!isValid.isLength($scope.registerData.phone,11,14,true)){
				BombBox.warBox('手机号码长度不正确')
				return;
			}else if(!isValid.isRegexp($scope.registerData.phone,$scope.reg.phone)){
				BombBox.warBox('手机号码格式不正确')
				return;
			}else if(!isValid.isNotEmputy($scope.registerData.password)){
				BombBox.warBox('密码不能为空')
				return;
			}else if(!isValid.isLength($scope.registerData.password,6,16,false)){
				BombBox.warBox('密码长度为6~16位')
				return;
			}else if(!isValid.isRegexp($scope.registerData.password,$scope.reg.password)){
				BombBox.warBox('密码由数字和字母组成')
				return;
			}else if(!isValid.isEqual($scope.registerData.password,$scope.registerData.repassword)){
				BombBox.warBox('两次密码输入不一致')
				return;
			}else if(!isValid.isNotEmputy($scope.registerData.imgCode)){
				BombBox.warBox('图片验证码不能为空')
				return;
			}else if(!isValid.isEqual($scope.registerData.imgCode,'5o7v')){
				BombBox.warBox('图片验证码不正确')
				return;
			}else if(!isValid.isNotEmputy($scope.registerData.phoneCode)){
				BombBox.warBox('手机验证码不能为空')
				return;
			}else if(!isValid.isEqual($scope.registerData.phoneCode,$scope.codedata.code)){
				BombBox.warBox('手机验证码不正确')
				return;
			}
		};

		$scope.submitdata = function(){
			isValidconfirm();
		}

	}])