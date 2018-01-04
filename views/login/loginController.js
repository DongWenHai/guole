angular.module('app')
	.controller('loginController',['$scope','$state','isValid','BombBox','API',function($scope,$state,isValid,BombBox,API){
		
		$scope.logindata = {
			phone: '',
			password: ''
		};

		$scope.reg = {
			phone: /^(\+86){0,1}1[35678]\d{9}$/,
			password: /[0-9A-z]{6,16}/
		};
		//登录
		$scope.login = function(){
			if(!valValid()){return}
			BombBox.loadingShow();
			API.fetchPost('http:/127.0.0.1:9000/login', $scope.logindata)
				.then(function(data){
					BombBox.loadingHide();
					if(data.data.statusCode == 301 || data.data.statusCode == 302){
						BombBox.warBox(data.data.msg);
					}else{
						$state.go('footer.home');
					}					
				})
				.catch(function(err){
					BombBox.loadingHide();
					console.log(err);
				})
		}

		function valValid(){
			if(!isValid.isNotEmputy($scope.logindata.phone)){
				BombBox.warBox('手机号不能为空');
				return false;
			}else if(!isValid.isLength($scope.logindata.phone,11,14,true)){
				BombBox.warBox('手机号长度不正确');
				return false;
			}else if(!isValid.isRegexp($scope.logindata.phone, $scope.reg.phone)){
				BombBox.warBox('手机号格式不正确');
				return false;
			}else if(!isValid.isNotEmputy($scope.logindata.password)){
				BombBox.warBox('密码不能为空');
				return false;
			}else if(!isValid.isLength($scope.logindata.password,6,16,false)){
				BombBox.warBox('密码长度不正确');
				return false;
			}else if(!isValid.isRegexp($scope.logindata.password, $scope.reg.password)){
				BombBox.warBox('密码格式不正确');
				return false;
			}
			return true;
		};

	}])