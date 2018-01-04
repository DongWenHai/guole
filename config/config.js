angular.module('app')
	.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
		 $ionicConfigProvider.platform.ios.tabs.position('bottom');
		 $ionicConfigProvider.platform.android.tabs.position('bottom');
	}])
	.config(["$httpProvider", function ($httpProvider) {
	　　//更改 Content-Type
	    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
	    $httpProvider.defaults.headers.post["Accept"] = "*/*";
	    $httpProvider.defaults.transformRequest = function (data) { 
	    //把JSON数据转换成字符串形式
	      if (data !== undefined) { 
	        return $.param(data);
	      }
	        return data;
	      };
  	}])