angular.module('app')
	.controller('modifypwdController',['$scope','API','BombBox','$state','isValid',function($scope,API,BombBox,$state,isValid){
		$scope.isPhone = true;

		$scope.modifydata = {
			email:'',
			phone:'',
			password:'',
			repassword:'',
			code:'',
			getCode:''
		}

		$scope.usePhone = function(){
			$scope.isPhone = true;
		};

		$scope.useEmail = function(){
			$scope.isPhone = false;
		};

		//getCode
		$scope.getcode = function(){
			if($scope.isPhone){

			}else{
				if(!isEmail()){return}

				BombBox.loadingShow();	
				API.fetchGet('http://127.0.0.1:9000/getEmailCode', $scope.modifydata)
					.then(function(data){
						BombBox.loadingHide();
						$scope.modifydata.getCode = data.data.code;
						console.log(data);
					})
					.catch(function(err){
						BombBox.loadingHide();
						console.log(err);
					})
			}
		}
		//submit modifydata
		$scope.submitdata = function(){
			if($scope.isPhone){
				usephone();
			}else{
				useemail();
			}
		};
		//modifypwd use phone
		function usephone(){
			API.fetchPost('http://127.0.0.1:9000/modifypwdPhone', $scope.modifydata)
				.then(function(data){
					console.log(data);
				})
				.catch(function(err){
					console.log(err);
				})
		};
		//modifypwd use email
		function useemail(){
			if(!isEmail()){
				return
			}else if(!isValidVal()){
				return
			}
			BombBox.loadingShow();
			API.fetchPost('http://127.0.0.1:9000/modifypwdEmail', $scope.modifydata)
				.then(function(data){
					BombBox.loadingHide();
					if(data.data.statusCode == 400){
						BombBox.warBox(data.data.msg);
						$state.go('login');
					}else{
						BombBox.warBox(data.data.msg);
					}
				})
				.catch(function(err){
					BombBox.loadingHide();
					console.log(err);
				})
		};
		//check email
		function isEmail(){
			if(!isValid.isNotEmputy($scope.modifydata.email)){
				BombBox.warBox('邮箱不能为空');
				return false;
			}else if(!isValid.isEmail($scope.modifydata.email)){
				BombBox.warBox('邮箱格式不正确');
				return false;
			}
			return true;
		}

		//check pwd and code
		$scope.regPwd = /[0-9A-z]{6,16}/;
		function isValidVal(){
			if(!isValid.isNotEmputy($scope.modifydata.password)){
				BombBox.warBox('密码不能为空');
				return false;
			}else if(!isValid.isLength($scope.modifydata.password,6,16,true)){
				BombBox.warBox('密码长度不正确');
				return false;
			}else if(!isValid.isRegexp($scope.modifydata.password,$scope.regPwd)){
				BombBox.warBox('密码格式不正确');
				return false;
			}else if(!isValid.isEqual($scope.modifydata.password, $scope.modifydata.repassword)){
				BombBox.warBox('两次密码输入不一致');
				return false;
			}else if(!isValid.isNotEmputy($scope.modifydata.code)){
				BombBox.warBox('请输入验证码');
				return false;
			}else if(!isValid.isEqual($scope.modifydata.code, $scope.modifydata.getCode)){
				BombBox.warBox('验证码不正确');
				return false;
			}
			return true;
		}
	}])