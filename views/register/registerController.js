angular.module('app')
	.controller('registerController',['$scope','$state','API','isValid','BombBox','formatTime','$interval',function($scope,$state,API,isValid,BombBox,formatTime,$interval){
		//control the button of sending verification code
		$scope.codebutton = {
			loading: false,
			text: '发送验证码',
			retext: '再次发送',
			time: 60
		};
		//check phone
		function isPhone(){
			if(!isValid.isNotEmputy($scope.registerData.phone)){
				BombBox.warBox('手机号码不能为空')
				return false;
			}else if(!isValid.isLength($scope.registerData.phone,11,14,true)){
				BombBox.warBox('手机号码长度不正确')
				return false;
			}else if(!isValid.isRegexp($scope.registerData.phone,$scope.reg.phone)){
				BombBox.warBox('手机号码格式不正确')
				return false;
			}
			return true;
		}
		//send verification code loading
		function codeButtonLoading(){
			$scope.codebutton.time = 60;
			$scope.codebutton.loading = true;			
			var timer = $interval(function(){		
				$scope.codebutton.time = $scope.codebutton.time - 1;
				$scope.codebutton.text = $scope.codebutton.time + 's' + $scope.codebutton.retext;
				if($scope.codebutton.time <= 0){
					$interval.cancel(timer);
					$scope.codebutton.loading = false;
					$scope.codebutton.time = '';
					$scope.codebutton.text = $scope.codebutton.retext;
				}
			},1000);
		};
		//get verification code
		$scope.getcode = function(){
			if(!isPhone()){return}
			codeButtonLoading();
			API.fetchGet('http://127.0.0.1:9000/getcode',{phone:$scope.registerData.phone})
				.then(function(data){
					$scope.codedata = data.data;
					if(data.data.statusCode == 1){
						BombBox.warBox(data.data.msg)
					}
					console.log($scope.codedata)
				})
				.catch(function(err){
					console.log(err);
				})
		};
		//register information
		$scope.registerData = {
			phone:'',
			password:'',
			repassword:'',
			imgCode:'',
			phoneCode:'',
			registerTime:''
		};

		$scope.codedata = '';

		function modifyCodedata(){
			$scope.codedata = '';
		};

		$scope.reg = {
			phone: /^(\+86){0,1}1[35678]\d{9}$/,
			password: /[0-9A-z]{6,16}/
		}
		//check register information
		function isValidconfirm(){
			if(!isValid.isNotEmputy($scope.registerData.phone)){
				BombBox.warBox('手机号码不能为空')
				return false;
			}else if(!isValid.isLength($scope.registerData.phone,11,14,true)){
				BombBox.warBox('手机号码长度不正确')
				return false;
			}else if(!isValid.isRegexp($scope.registerData.phone,$scope.reg.phone)){
				BombBox.warBox('手机号码格式不正确')
				return false;
			}else if(!isValid.isNotEmputy($scope.registerData.password)){
				BombBox.warBox('密码不能为空')
				return false;
			}else if(!isValid.isLength($scope.registerData.password,6,16,false)){
				BombBox.warBox('密码长度为6~16位')
				return false;
			}else if(!isValid.isRegexp($scope.registerData.password,$scope.reg.password)){
				BombBox.warBox('密码由数字和字母组成')
				return false;
			}else if(!isValid.isEqual($scope.registerData.password,$scope.registerData.repassword)){
				BombBox.warBox('两次密码输入不一致')
				return false;
			}else if(!isValid.isNotEmputy($scope.registerData.imgCode)){
				BombBox.warBox('图片验证码不能为空')
				return false;
			}else if(!isValid.isEqual($scope.registerData.imgCode,'5o7v')){
				BombBox.warBox('图片验证码不正确')
				return false;
			}else if(!isValid.isNotEmputy($scope.registerData.phoneCode)){
				BombBox.warBox('手机验证码不能为空')
				return false;
			}else if(!isValid.isEqual($scope.registerData.phoneCode,$scope.codedata.code)){
				BombBox.warBox('手机验证码不正确')
				return false;
			}
			return true;
		};
		//submit registr information
		$scope.submitdata = function(){
			if(!isValidconfirm()){return}
			BombBox.loadingShow();
			$scope.registerData.registerTime = formatTime.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
			API.fetchPost('http://127.0.0.1:9000/register',$scope.registerData)
				.then(function(data){
					BombBox.loadingHide();
					if(data.data.statusCode == 201 || data.data.statusCode == 202){
						BombBox.warBox(data.data.msg);
					}else{
						BombBox.warBox(data.data.msg);
						$state.go('login');
					}
				})
				.catch(function(data){
					BombBox.loadingHide();
					BombBox.warBox(data.data);
					console.log(data);
				});
		};
		//accept agreement
		$scope.acceptAgreement = false;

	}])