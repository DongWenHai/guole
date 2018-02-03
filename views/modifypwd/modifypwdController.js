angular.module('app')
	.controller('modifypwdController',['$scope','API','BombBox','$state','isValid','$interval',function($scope,API,BombBox,$state,isValid,$interval){
		$scope.isPhone = true;

		$scope.getCodeDisabled = false;

		$scope.modifydata = {
			email:'',
			phone:'',
			password:'',
			repassword:'',
			code:'',
			getCode:''
		};
		//获取验证码按钮
		$scope.getPhoneCode = {
			but:'获取验证吗',
			rebut:'s再次获取',
			time:''
		};

		//改变手机号或邮箱时改变获取的验证码
		$scope.modifyCode = function(){
			$scope.modifydata.getCode = '';
		}
		//重置表单
		function initModifydata(){
			for(var key in $scope.modifydata){
				$scope.modifydata[key] = '';
			}
		}
		//使用手机修改密码
		$scope.usePhone = function(){
			$scope.isPhone = true;
			initModifydata();
		};
		//使用邮箱修改密码
		$scope.useEmail = function(){
			$scope.isPhone = false;
			initModifydata();
		};

		//getCode
		$scope.getcode = function(){
			if($scope.isPhone){
				if(!isPhone()){return};
				BombBox.loadingShow();
				API.fetchGet('http://127.0.0.1:9000/getcode',{phone:$scope.modifydata.phone})
				.then(function(data){
					$scope.modifydata.getCode = data.data.code;
					if(data.data.statusCode == 1 || data.data.statusCode == 2){
						BombBox.warBox(data.data.msg)
						BombBox.loadingHide();
					}else{
						console.log(data);
						BombBox.warBox(data.data.msg)
						BombBox.loadingHide();
						$scope.getCodeDisabled = true;
						$scope.getPhoneCode.but = $scope.getPhoneCode.rebut;
						$scope.getPhoneCode.time = '60';
						var timer = $interval(function(){
							$scope.getPhoneCode.time = $scope.getPhoneCode.time -1;
							if($scope.getPhoneCode.time <=1){
								$scope.getCodeDisabled = false;	
								$interval.cancel(timer);
								$scope.getPhoneCode.time = '';	
								$scope.getPhoneCode.but = '再次发送';						
							}
						},1000)
					}
				})
				.catch(function(err){
					console.log(err);
				})
			}else{
				if(!isEmail()){return}
				BombBox.loadingShow();	
				API.fetchGet('http://127.0.0.1:9000/getEmailCode', $scope.modifydata)
					.then(function(data){
						BombBox.loadingHide();
						$scope.modifydata.getCode = data.data.code;
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
			if(!isPhone()){
				return;
			}else if(!isValidVal()){
				return;
			}
			BombBox.loadingShow();
			API.fetchPost('http://127.0.0.1:9000/modifypwdPhone', $scope.modifydata)
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
		//check phone
		$scope.regPhone = /^(\+86){0,1}1[35678]\d{9}$/;
		function isPhone(){
			if(!isValid.isNotEmputy($scope.modifydata.phone)){
				BombBox.warBox('手机号码不能为空');
				return false;
			}else if(!isValid.isLength($scope.modifydata.phone,11,14,true)){
				BombBox.warBox('手机号长度不正确');
				return false;
			}else if(!isValid.isRegexp($scope.modifydata.phone,$scope.regPhone)){
				BombBox.warBox('密码格式不正确');
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
			}else if(!isValid.isLength($scope.modifydata.password,6,16,false)){
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